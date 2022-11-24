<?php

require_once('../db.php');

$index = $_POST['index'];

$sql = "DELETE FROM columnitems WHERE id='$index'";

echo (mysqli_query($conn, $sql)) ? true : false;