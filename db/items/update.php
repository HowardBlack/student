<?php

require_once('../db.php');

$data = (isset($_POST['data'])) ? $_POST['data'] : 'none';

if ($data != 'none') {
    $sql = "UPDATE columnitems
            SET item = '$data[1]'
            WHERE (classname = '$class' AND id = '$data[0]')";

    echo (mysqli_query($conn, $sql));
} else
    echo false;