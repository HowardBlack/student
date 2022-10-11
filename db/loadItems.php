<?php

require_once('db.php');

$code = $_POST['code'];
$columnItems = mysqli_query($conn, "SELECT * FROM columnitems WHERE type='$code'");

if (mysqli_num_rows($columnItems) > 0)
    echo json_encode(mysqli_fetch_all($columnItems));