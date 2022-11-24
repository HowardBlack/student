<?php

require_once('../db.php');

$data = $_POST['data'];

$sql = "UPDATE columnname SET typeName = '$data[1]' WHERE type='$data[0]'";

echo (mysqli_query($conn, $sql)) ? true : false;