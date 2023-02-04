<?php

require 'db.php';

$column = mysqli_query($conn, "SELECT * FROM columnname WHERE classname = '$class'");

if (mysqli_num_rows($column) > 0) 
    echo json_encode(mysqli_fetch_all($column));

mysqli_close($conn);