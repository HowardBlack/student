<?php

date_default_timezone_set("Asia/Taipei");

$status = false;
$sql = $class = '';
try
{
    $class = (isset($_POST['class'])) ? $_POST['class'] : 'none';
    $conn = mysqli_connect('localhost', 'root', 'chihlee168@@', 'classdb', '3307');
}
catch (Exception $e)
{
    $conn = false;
    print $conn;
}