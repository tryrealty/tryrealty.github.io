<? 
// ----------------------------конфигурация-------------------------- // 
 
$adminemail="superbusi@yandex.ru";  // e-mail админа 
//$adminemail2="rm-mail@yandex.ru";  // e-mail админа 
 
 
$date=date("d.m.y"); // число.месяц.год 
 
$time=date("H:i"); // часы:минуты:секунды 
 
$backurl="/";  // На какую страничку переходит после отправки письма 
 
//---------------------------------------------------------------------- // 
 
  
 
// Принимаем данные с формы 
 
$name=$_POST['name2']; 
 
$email2=$_POST['email2']; 
 
$body2=$_POST['message2'];
 
  
 

 
 
$msg=" 

Имя: $name

E-mail: $email2

Сообщение: $body2


"; 
 
  
 
 // Отправляем письмо админу  
 
 if($body2 != ""){
 
 
mail("$adminemail", "SUPERBUSI.COM. Сообщение 
от $name. Время отправки $date $time", "$msg"); 

//mail("$adminemail2", "SUPERBUSI.COM. Сообщение 
//от $name. Время отправки $date $time", "$msg");
 
  
// Выводим сообщение пользователю 
 
print "<script language='Javascript'><!-- 
function reload() {location = \"$backurl\"}; setTimeout('reload()', 2000); 
//--></script> 
<body bgcolor='#AB1F24'>
<center><h1 style='color: white;'>Сообщение отправлено! Спасибо за обращение!</h1></center>";  

 }
 
 
exit; 
 
 
?>
