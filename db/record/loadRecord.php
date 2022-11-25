<?php

require_once('../db.php');

$result = mysqli_query($conn, "SELECT * FROM choiceitem");

if (mysqli_num_rows($result) > 0)
    echo json_encode(mysqli_fetch_all($result));
