<?php

require_once('../db.php');

$dataTable = $_POST['datatable'];
$data = $_POST['data'];

$sql = "INSERT INTO $dataTable VALUES('$data[0]', '$data[1]')";

try {
    $status = mysqli_query($conn, $sql);
    echo true;
}catch (Exception $err) {
    try {
        $sql = "INSERT INTO $dataTable VALUES(null, '$data[0]', '$data[1]')";
        $status = mysqli_query($conn, $sql);
        echo true;
    }catch (Exception $err) {
        echo false;
    }
}