<?php

require_once('../db.php');

$data = $_POST['data'];

$path = "../../data/$data[0]_*";
$searchResult = glob($path);
if (count($searchResult) > 0) rename($searchResult[0], "../../data/$data[0]_$data[1]");

$sql = "UPDATE studentinfo SET name = '$data[1]' WHERE sid='$data[0]'";

echo (mysqli_query($conn, $sql)) ? true : false;