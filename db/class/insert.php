<?php

require_once('./createClass.php');

$dataTable = $_POST['datatable'];
$data = $_POST['data'];

foreach ($data as $row) {
    $sql = "INSERT INTO $dataTable(showclassname, classname)
            VALUES ('$row[0]', '$row[1]')";
    $status = mysqli_query($conn, $sql);
    if (!$status) break;
}

echo $status;