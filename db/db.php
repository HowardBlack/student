<?php

date_default_timezone_set("Asia/Taipei");

$class = $_POST['class'];

try {
    $conn = mysqli_connect('localhost', 'root', '', $class);
}catch (Exception $e){
    if ($class != '請選擇') {
        $conn = mysqli_connect('localhost', 'root', '');
        $sql = "CREATE DATABASE $class";
        if (mysqli_query($conn, $sql)) {
            $conn = mysqli_connect('localhost', 'root', '', $class);
            require_once('./createtable.php');
        }
    }
}
