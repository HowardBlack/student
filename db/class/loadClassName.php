<?php

require '../db.php';

$page = (isset($_POST['page'])) ? $_POST['page'] : 1;
$showPageCount = (isset($_POST['showPageCount'])) ? $_POST['showPageCount'] : 10;
$start = $showPageCount * $page - $showPageCount;

$sql = "SELECT COUNT(*) dataRow
        FROM classmanage
        ORDER BY lastRecordTime DESC";
$dataRow = 0;
$status = mysqli_query($conn, $sql);
if (mysqli_num_rows($status))
    $dataRow = ceil(mysqli_fetch_assoc($status)['dataRow'] / $showPageCount);

$sql = "SELECT id, showclassname, permission, classname, lastRecordTime, CONCAT(TIMESTAMPDIFF(MONTH, CURRENT_TIMESTAMP, lastRecordTime), '月') AS keepTime
        FROM classmanage
        ORDER BY lastRecordTime DESC
        LIMIT $start, $showPageCount";
$status = mysqli_query($conn, $sql);

if (mysqli_num_rows($status) > 0)
    echo json_encode([$dataRow, mysqli_fetch_all($status, MYSQLI_ASSOC)]);

mysqli_close($conn);