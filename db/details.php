<?php

require_once 'db.php';

$tableName = (isset($_POST['tableName'])) ? $_POST['tableName'] : 'none';

$sql = "SELECT * FROM $tableName WHERE classname = '$class'";

$data = mysqli_query($conn, $sql);

if (mysqli_num_rows($data))
    echo json_encode(mysqli_fetch_all($data, MYSQLI_ASSOC));

mysqli_close($conn);