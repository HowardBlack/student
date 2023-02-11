<?php

require_once '../db.php';

$page = (isset($_POST['page'])) ? $_POST['page'] : 1;
$showPageCount = (isset($_POST['showPageCount'])) ? $_POST['showPageCount'] : 10;
$start = $showPageCount * $page - $showPageCount;

$sql = "SELECT COUNT(*) dataRow
        FROM columnitems item
        JOIN columnname col ON col.classname = '$class'
        WHERE (item.classname = '$class' AND item.type = col.type)";
$dataRow = 0;
$status = mysqli_query($conn, $sql);
if (mysqli_num_rows($status))
    $dataRow = ceil(mysqli_fetch_assoc($status)['dataRow'] / $showPageCount);

$sql = "SELECT item.id, col.typeName, item.item
        FROM columnitems item
        JOIN columnname col ON col.classname = '$class'
        WHERE (item.classname = '$class' AND item.type = col.type)
        LIMIT $start, $showPageCount";
$items = mysqli_query($conn, $sql);

if (mysqli_num_rows($items) > 0)
    echo json_encode([$dataRow, mysqli_fetch_all($items, MYSQLI_ASSOC)]);
