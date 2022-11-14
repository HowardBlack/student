<?php

$class = $_POST['class'];

$conn = mysqli_connect('localhost', 'root', '');

if (!$conn)
    die('連線錯誤！');

$sql = "CREATE DATABASE IF NOT EXISTS $class";
(mysqli_query($conn, $sql)) ? false : true;