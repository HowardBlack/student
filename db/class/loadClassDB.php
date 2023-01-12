<?php

require_once('./createClass.php');

$sql = "SELECT * FROM classnamedb";
$status = mysqli_query($conn, $sql);

if (mysqli_num_rows($status) > 0)
    echo json_encode(mysqli_fetch_all($status));

mysqli_close($conn);