<?php

require_once('../db.php');

$id = $_POST['id'];

$sql = "DELETE FROM choiceitem WHERE id=$id";

echo (mysqli_query($conn, $sql)) ? true : false;