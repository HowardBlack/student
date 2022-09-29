<?php

require_once('db.php');

$info = mysqli_query($conn, "SELECT * FROM studentinfo");

if (mysqli_num_rows($info) > 0)
{
    echo json_encode(mysqli_fetch_all($info));
}