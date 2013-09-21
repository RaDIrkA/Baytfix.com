<html>
<head>
<meta charset="utf-8" />
</head>
<?php
$name = $HTTP_POST_VARS['name'];
$email = $HTTP_POST_VARS['email'];
$subject = 'Info from baytfix.com...';
$msg = $HTTP_POST_VARS['message'];
$vprasanje = $HTTP_POST_VARS['vprasanje'];
$ip = GetHostByName($REMOTE_ADDR);


if (!$name OR !$email OR !$msg OR !$vprasanje) die("Please fill in all fields");


{
$recipient = "info@baytfix.com";
}

$message = $msg."

Ime in priimek: ".$name."
Email: ".$email."
Vprašanje: ".$vprasanje."
IP: ".$ip;

$headers = "From: info@baytfix.com\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/plain; charset=utf-8\r\n";
$headers .= "Content-Transfer-Encoding: 8bit";
$orgsubject = "A subject with some swedish characters like å, ä and ö";
$newsubject='=?UTF-8?B?'.base64_encode($orgsubject).'?=';


if (!mail($recipient, $subject, $message, $headers)) die("Error in message SENT!");
echo "Message Sent Successfully."; 





?>
</html>