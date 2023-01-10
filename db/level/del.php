<?php

require_once('../db.php');

$type = $_POST['type'];

$sql = "DELETE FROM itemlevel WHERE typeLevel='$type'";

echo (mysqli_query($conn, $sql)) ? true : false;