<?php
$contact_name = $_POST['contact_name'];
$contact_email = $_POST['contact_email'];
$contact_location = $_POST['contact_location'];
$contact_message = $_POST['contact_message'];

$to = "Kelsey.Skaarva@gmail.com";
$subject = "Email from KelseySkaarva.com";

mail($to, $subject, $message, "From: " . $contact_name);
echo "Your Message has been sent. I will get back to you as soon as possible";
?>