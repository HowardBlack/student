<?php

require_once('db.php');

$sid = $_POST['sid'];
$type = $_POST['type'];
$item = $_POST['item'];
$month = $_POST['month'];

$sql = "SELECT remark, typeLevel
        FROM choiceitem AS c
        WHERE (recordMonth = '$month' AND sid = '$sid')
                AND (type = '$type' AND item = '$item')";

$dataQuery = mysqli_query($conn, $sql);

if (mysqli_num_rows($dataQuery))
    echo json_encode(mysqli_fetch_assoc($dataQuery));

mysqli_close($conn);