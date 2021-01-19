// <?php
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);
// /*
// Tested working with PHP5.4 and above (including PHP 7 )

 // */
// require_once './vendor/autoload.php';

// use FormGuide\Handlx\FormHandler;


// $pp = new FormHandler();

// $validator = $pp->getValidator();
// $validator->fields(['name','email'])->areRequired()->maxLength(50);
// $validator->field('email')->isEmail();
// $validator->field('message')->maxLength(6000);




// $pp->sendEmailTo('sdv.mikhail@gmail.com'); // ← Your email here

// echo $pp->process($_POST);





<?php $name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "sdv.mikhail@gmail.com, msdv@pm.me";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
// echo "Thank You!";
?>