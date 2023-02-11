<?php

require_once 'db.php';

$tableName = (isset($_POST['tableName'])) ? $_POST['tableName'] : 'none';
$page = (isset($_POST['page'])) ? $_POST['page'] : 1;
$showPageCount = (isset($_POST['showPageCount'])) ? $_POST['showPageCount'] : 10;
$start = $showPageCount * $page - $showPageCount;

if ($class != 'none')
    $sql = "SELECT COUNT(*) dataRow
            FROM $tableName
            WHERE classname = '$class';";
else
    $sql = "SELECT COUNT(*) dataRow
            FROM $tableName;";

$status = mysqli_query($conn, $sql);
if (mysqli_num_rows($status))
    $dataRow = ceil(mysqli_fetch_assoc($status)['dataRow'] / $showPageCount);

if ($class != 'none')
    $sql = "SELECT *
            FROM $tableName
            WHERE classname = '$class'
            LIMIT $start, $showPageCount;";
else
    $sql = "SELECT *
            FROM $tableName
            LIMIT $start, $showPageCount;";

$data = mysqli_query($conn, $sql);

if (mysqli_num_rows($data))
    echo json_encode([$dataRow, mysqli_fetch_all($data, MYSQLI_ASSOC)]);

mysqli_close($conn);