<?php

require_once('../db.php');

$type = $_POST['type'];

$sql = "DELETE FROM columnname WHERE type='$type'";

echo (mysqli_query($conn, $sql)) ? true : false;