<?php
// Check if form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $comments = $_POST['comments'];

    // Set email content
    $to = 'websiteowner@example.com';
    $subject = 'Contact Form Submission';
    $message = "Name: $fullname\nEmail: $email\nPhone: $phone\nComments: $comments";
    $headers = "From: $email\r\n" .
               "Reply-To: $email\r\n" .
               "X-Mailer: PHP/" . phpversion();

    // Send email
    if (mail($to, $subject, $message, $headers)) {
        // Redirect to thank you page
        header('Location: thankyou.html');
        exit;
    } else {
        // Handle errors
        echo 'Message could not be sent.';
    }
}
?>