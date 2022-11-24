<?php

require_once('../db.php');

$sid = $_POST['sid'];

$sql = "DELETE FROM studentinfo WHERE sid='$sid'";

echo (mysqli_query($conn, $sql)) ? true : false;