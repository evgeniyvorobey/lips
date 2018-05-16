<?php

$name = $_POST['firstname'];
$phone = $_POST['phone'];
$token = "576222313:AAF9jL847FMQibaGhBLjkhJlowSE_MuT4ds";
$chat_id = "-282227499";
$arr = array(
    'Имя: ' => $name,
    'Телефон: ' => $phone,
);

foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
    header ('Location: ../congratulation.html');
} else {
    echo 'Error';
}
?>
