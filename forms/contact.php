<?php
// Improved contact handler: validation, sanitization, header injection protection, JSON responses.
header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Invalid request method.']);
    exit;
}

// Helper: get POST value or empty string
function post($key) {
    return isset($_POST[$key]) ? $_POST[$key] : '';
}

// Simple header injection protection
function strip_header_injection($str) {
    return preg_replace('/[\r\n]|cc:|bcc:|to:/i', '', $str);
}

$name = trim(post('name'));
$email = trim(post('email'));
$subject = trim(post('subject')) ?: 'Website Contact Form';
$message = trim(post('message'));

// Optional honeypot (bot trap) field: if present and not empty, treat as spam
if (isset($_POST['website']) && $_POST['website'] !== '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Spam detected.']);
    exit;
}

// Basic validation
if ($name === '' || $email === '' || $message === '') {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please complete all required fields.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Please provide a valid email address.']);
    exit;
}

// Sanitize inputs
$safe_name = strip_header_injection(strip_tags($name));
$safe_email = strip_header_injection($email);
$safe_subject = strip_header_injection(strip_tags($subject));
$safe_message = strip_tags($message);

// Recipient - change to your real address if needed
$to = 'yenussadik1078@gmail.com';

// Build email
$email_subject = $safe_subject;
$email_body = "Name: {$safe_name}\n";
$email_body .= "Email: {$safe_email}\n";
$email_body .= "Subject: {$safe_subject}\n\n";
$email_body .= "Message:\n{$safe_message}\n";

// Headers
$headers = "From: {$safe_name} <{$safe_email}>\r\n";
$headers .= "Reply-To: {$safe_email}\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Try to send
if (@mail($to, $email_subject, $email_body, $headers)) {
    http_response_code(200);
    echo json_encode(['success' => true, 'message' => 'Thank you! Your message has been sent.']);
    exit;
} else {
    // Fallback: inform user and suggest SMTP/PHPMailer configuration in README
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send message. Please check server mail configuration or use SMTP (see README).']);
    exit;
}

?>
