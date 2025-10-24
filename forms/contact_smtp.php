<?php
// SMTP contact handler with PHPMailer fallback
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
    exit;
}

function post($k){ return isset($_POST[$k]) ? trim($_POST[$k]) : ''; }
function strip_header_injection($s){ return preg_replace('/[\r\n]|cc:|bcc:|to:/i','',$s); }

$name = strip_header_injection(strip_tags(post('name')));
$email = strip_header_injection(post('email'));
$subject = strip_header_injection(strip_tags(post('subject')) ?: 'Website Contact');
$message = strip_tags(post('message'));

// honeypot
if (isset($_POST['website']) && $_POST['website'] !== ''){
    http_response_code(400);
    echo json_encode(['success'=>false,'message'=>'Spam detected']);
    exit;
}

if ($name === '' || $email === '' || $message === ''){
    http_response_code(400);
    echo json_encode(['success'=>false,'message'=>'Please complete all required fields.']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
    http_response_code(400);
    echo json_encode(['success'=>false,'message'=>'Please provide a valid email address.']);
    exit;
}

// Basic rate limit: per-IP file with timestamp of last send. 30s cooldown.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = sys_get_temp_dir() . '/contact_rate_' . md5($ip);
$cooldown = 30; // seconds
if (file_exists($rateFile)){
    $last = (int)file_get_contents($rateFile);
    if (time() - $last < $cooldown){
        http_response_code(429);
        echo json_encode(['success'=>false,'message'=>'Please wait before sending another message.']);
        exit;
    }
}
file_put_contents($rateFile, (string)time());

$to = getenv('CONTACT_TO') ?: 'yenussadik1078@gmail.com';
$body = "Name: {$name}\nEmail: {$email}\nSubject: {$subject}\n\nMessage:\n{$message}\n";

// Attempt to use PHPMailer if available
if (file_exists(__DIR__ . '/../vendor/autoload.php')){
    require __DIR__ . '/../vendor/autoload.php';
    try{
        $mail = new PHPMailer\PHPMailer\PHPMailer(true);
        // SMTP config from env
        $useSMTP = getenv('SMTP_HOST') ? true : false;
        if ($useSMTP){
            $mail->isSMTP();
            $mail->Host = getenv('SMTP_HOST');
            $mail->SMTPAuth = true;
            $mail->Username = getenv('SMTP_USER');
            $mail->Password = getenv('SMTP_PASS');
            $mail->SMTPSecure = getenv('SMTP_SECURE') ?: 'tls';
            $mail->Port = (int)(getenv('SMTP_PORT') ?: 587);
        }
        $mail->setFrom($email, $name);
        $mail->addAddress($to);
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->send();
        http_response_code(200);
        echo json_encode(['success'=>true,'message'=>'Thank you! Your message has been sent.']);
        exit;
    } catch (Exception $e){
        // fall back to mail()
    }
}

// fallback to mail()
$headers = "From: {$name} <{$email}>\r\nReply-To: {$email}\r\nMIME-Version: 1.0\r\nContent-Type: text/plain; charset=UTF-8\r\n";
if (@mail($to, $subject, $body, $headers)){
    http_response_code(200);
    echo json_encode(['success'=>true,'message'=>'Thank you! Your message has been sent.']);
    exit;
} else {
    http_response_code(500);
    echo json_encode(['success'=>false,'message'=>'Failed to send message; check server mail settings or configure SMTP (see README).']);
    exit;
}

?>
