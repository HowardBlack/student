<?php

require_once('db.php');

$column = mysqli_query($conn, "SELECT * FROM columnname");

if (mysqli_num_rows($column) > 0) 
    echo json_encode(mysqli_fetch_all($column));