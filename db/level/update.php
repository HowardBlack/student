<?php

require_once('../db.php');

$data = (isset($_POST['data'])) ? $_POST['data'] : 'none';

if ($data != 'none') {
    $sql = "UPDATE itemLevel
            SET level = '$data[1]'
            WHERE (classname = '$class' AND type = '$data[0]')";
    echo (mysqli_query($conn, $sql));
} else
    echo false;