<?php

require_once('../db.php');

$data = $_POST['data'];

$sql = "UPDATE itemLevel
        SET level = '$data[1]'
        WHERE (classname = '$class' AND type = '$data[0]')";

echo (mysqli_query($conn, $sql)) ? true : false;