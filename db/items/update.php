<?php

require_once('../db.php');

$data = $_POST['data'];

$sql = "UPDATE columnitems
        SET item = '$data[1]'
        WHERE (classname = '$class' AND id = '$data[0]')";

echo (mysqli_query($conn, $sql)) ? true : false;