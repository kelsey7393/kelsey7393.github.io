<?php
$contact_name = $_POST['contactName'];
$contact_email = $_POST['contactEmail'];
$contact_location = $_POST['contactLocation'];
$contact_message = $_POST['contactMessage'];

$to = "Kelsey.Skaarva@gmail.com";
$subject = "Email from KelseySkaarva.com";

$mailheader = "From: $contact_email \r\n";
$formcontent="From: $contact_name \nLocation: $contact_location \nMessage: $contact_message";

$mail_retval = mail($to, $subject, $formcontent, $mailheader) or die("Error!");

echo "Your Message has been sent. I will get back to you as soon as possible";
?>