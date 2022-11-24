<?php

require_once('db.php');

$tableName = $_POST['tableName'];

$sql = "SELECT * FROM $tableName";

$data = mysqli_query($conn, $sql);

if (mysqli_num_rows($data))
    echo json_encode(mysqli_fetch_all($data));

mysqli_close($conn);