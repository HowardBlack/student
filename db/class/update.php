<?php

require_once('./createClass.php');

$id = $_POST['id'];
$showclassname = $_POST['showclassname'];
$status = $_POST['status'];

$status = ($status == 'f') ? '0' : '1';

$sql = "UPDATE classmanage
        SET permission = $status
        WHERE id = $id AND showclassname = '$showclassname'";

echo (mysqli_query($conn, $sql)) ? true : false;
