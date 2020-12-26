<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Document</title>
</head>
<body>

<?php
//if(!empty($_POST['number']))
//{
$to = "rm-mail@yandex.ru";
$to2 = "mail@x-mebel.org";
$to3 = "Zondrek1@gmail.com";
$to4 = "gtr@inbox.ru";
$from = 'mail@x-mebel.org';
$subject = "Recall from ".$_POST['name'];
$message = 'Имя: '.$_POST['name'].'; Телефон: '.$_POST['number'].';';
$headers = "Content-type: text/html; charset=UTF-8 \r\n";
$headers .= "From: <mail@x-mebel.org>\r\n";
$result = mail($to, $subject, $message);
$result = mail($to2, $subject, $message);
$result = mail($to3, $subject, $message);
$result = mail($to4, $subject, $message);

    if ($result){ 
        echo "Просьба перезвонить отправлена! Спасибо за обращение!<br />Менеджер с Вами свяжется в течении 10 минут!<br /><br /><button class='btn btn-default' type='button' data-dismiss='modal'>Закрыть</button>";
    }
    else{
        echo "<p>Cообщение не отправленно. Пожалуйста, попробуйте еще раз.</p><input type='text' class='form-control' name='name' id='name' placeholder='Введите имя' autofocus required> <br /> 
<input type='text' class='form-control' name='number' id='number' placeholder='Введите номер' required> <br /> 
<font style='color: red'>Заказы обрабатываются с 10:00 до 22:00 без выходных</font> <br /> <br /> 
<input id='button' type='submit'  value='Заказать обратный звонок' onclick='AjaxFormRequest('messegeResult', 'formMain', 'form.php')' class='btn btn-default' /> <button class='btn btn-default' type='button' data-dismiss='modal'>Закрыть</button>";
    }
// }
// else {
// echo "<p>Заполните все поля.</p><input type='text' class='form-control' name='name' id='name2' placeholder='Введите имя' autofocus required> <br /> 
// <input type='text' class='form-control' name='number' id='number' placeholder='Введите номер' required> <br /> 
// <font style='color: red'>Заказы обрабатываются с 10:00 до 22:00 без выходных</font> <br /> <br /> 
// <input id='button' type='submit'  value='Заказать обратный звонок' onclick='AjaxFormRequest('messegeResult', 'formMain', 'form.php')' class='btn btn-default' /> <button class='btn btn-default' type='button' data-dismiss='modal'>Закрыть</button>";
// }
?>

</body>
</html>