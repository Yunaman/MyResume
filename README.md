# MyResume - Deployment Notes

This is a static/responsive resume website with a PHP contact form. Use this guide to prepare the project for deployment and ensure the contact form works reliably.

## Requirements

- A web server with PHP 7.4+ (PHP 8.x recommended).
- For the built-in `mail()` function to work, the server must have a working MTA (sendmail, exim, msmtp on Linux) or be configured on Windows IIS/SMTP.
- Recommended: configure SMTP and use PHPMailer for reliable delivery (instructions below).

## Contact form (`forms/contact.php`)

The contact form now:
- Validates and sanitizes input.
- Returns JSON responses (suitable for AJAX submissions).
- Protects against basic header injection.
- Has a simple honeypot field `website` (if present and filled, it's treated as spam).

If `mail()` is not available or unreliable, use PHPMailer with SMTP:

1. Install PHPMailer in your deployment environment (Composer is recommended):

   composer require phpmailer/phpmailer

2. Replace the `mail()` call in `forms/contact.php` with PHPMailer code and SMTP credentials. Example (very brief):

   ```php
   use PHPMailer\PHPMailer\PHPMailer;
   $mail = new PHPMailer(true);
   $mail->isSMTP();
   $mail->Host = 'smtp.example.com';
   $mail->SMTPAuth = true;
   $mail->Username = 'smtp-user';
   $mail->Password = 'smtp-pass';
   $mail->SMTPSecure = 'tls';
   $mail->Port = 587;
   $mail->setFrom($safe_email, $safe_name);
   $mail->addAddress('your@address.com');
   $mail->Subject = $email_subject;
   $mail->Body = $email_body;
   $mail->send();
   ```

3. Update `forms/contact.php` response handling accordingly.

## AJAX integration

The form in `index.html` uses a class `php-email-form` and vendor script `assets/vendor/php-email-form/validate.js`. The current `forms/contact.php` returns JSON, so update or extend the front-end code that handles the form submission to parse JSON responses (if it currently expects plain text).

If you want, I can wire the front-end to read the JSON response and show success/error messages without page reload.

## Testing

- Quick local test (no mail server): Use a service like MailHog or Mailtrap.
- Production: configure SMTP credentials and use PHPMailer.

## Security notes

- Don't expose SMTP credentials in public repos. Use environment variables or server config.
- For higher volume or guaranteed delivery, use a transactional email service (SendGrid, Mailgun, Amazon SES) with SMTP or API integration.

---
If you want I can:
- Replace `mail()` with PHPMailer and include a sample SMTP-ready implementation.
- Update the front-end JS to parse the JSON responses and display messages smoothly.
- Add a brief deploy checklist for common hosting providers (cPanel, DigitalOcean, Netlify + serverless function, etc.).
