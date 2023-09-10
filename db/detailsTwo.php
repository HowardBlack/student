<?php

require_once 'db.php';

$tableName = (isset($_POST['tableName'])) ? $_POST['tableName'] : 'none';

if ($tableName == 'classmanage') {
    $sql = "SELECT * FROM $tableName";
}else {
    $sql = "SELECT *
            FROM $tableName
            WHERE classname = '$class'";
}

$status = mysqli_query($conn, $sql);

if (mysqli_num_rows($status))
    echo json_encode(mysqli_fetch_all($status, MYSQLI_ASSOC));

mysqli_close($conn);