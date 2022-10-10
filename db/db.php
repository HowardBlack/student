<?php

date_default_timezone_set("Asia/Taipei");

$class = $_POST['class'];
$conn = mysqli_connect('localhost', 'root', 'chihlee168@@', $class);
if (!$conn)
    echo die("connect db error.");