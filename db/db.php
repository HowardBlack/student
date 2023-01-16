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
            // 建立班級資料庫資料表
            $path = "../$class";
            if (!file_exists($path)) mkdir($path, 0777, true);
            $conn = mysqli_connect('localhost', 'root', '', $class);
            require_once('./createtable.php');
        }
    }
    echo false;
}   
