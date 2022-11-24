<?php

require_once('../db.php');

$data = $_POST['data'];

$sql = "UPDATE studentinfo SET name = '$data[1]' WHERE sid='$data[0]'";

echo (mysqli_query($conn, $sql)) ? true : false;