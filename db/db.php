<?php

date_default_timezone_set("Asia/Taipei");

$class = $_POST['class'];
$conn = mysqli_connect('localhost', 'root', '', $class);
if (!$conn)
    die("connect db error.");