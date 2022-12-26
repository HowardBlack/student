<?php

require_once('db.php');

$sid = $_POST['sid'];
$type = $_POST['type'];
$item = $_POST['item'];
$month = $_POST['month'];

$sql = "SELECT remark FROM choiceitem WHERE (recordMonth = '$month' AND sid = '$sid') AND (type = '$type' AND item = '$item')";
$dataQuery = mysqli_query($conn, $sql);

if (mysqli_num_rows($dataQuery))
    echo mysqli_fetch_assoc($dataQuery)['remark'];
else
    echo '';

mysqli_close($conn);