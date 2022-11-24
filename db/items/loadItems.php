<?php

require_once('../db.php');

$items = mysqli_query($conn, "SELECT * FROM columnitems");

if (mysqli_num_rows($items) > 0)
    echo json_encode(mysqli_fetch_all($items));
