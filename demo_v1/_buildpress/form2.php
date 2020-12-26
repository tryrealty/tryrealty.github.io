<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Document</title>
</head>
<body>


<?php
$to = "rm-mail@yandex.ru";
$to2 = "mail@x-mebel.org";
$to3 = "Zondrek1@gmail.com";
$to4 = "gtr@inbox.ru";
$from = 'mail@x-mebel.org';
$subject = "Message from ".$_POST['your-name'];
$message = 'Имя: '.$_POST['your-name'].'; E-mail: '.$_POST['your-email'].'; Тема: '.$_POST['your-subject'].'; Сообщение: '.$_POST['your-message'].';';
$result = mail($to, $subject, $message);
$result = mail($to2, $subject, $message);
$result = mail($to3, $subject, $message);
$result = mail($to4, $subject, $message);

    if ($result){ 
        echo "Сообщение отправленно!";
    }
    else{
        echo "<p>Cообщение не отправленно. Пожалуйста, попробуйте еще раз.</p>";
    }
?>

</body>
</html>