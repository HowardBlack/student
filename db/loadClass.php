<?php

require_once('db.php');

$page = (isset($_POST['page'])) ? $_POST['page'] : 1;
$showPageCount = (isset($_POST['showPageCount'])) ? $_POST['showPageCount'] : 10;
$start = $showPageCount * $page - $showPageCount;

// 回傳資料表總筆數 - 為建立分頁使用
$dataRow = 0;
$sql = "SELECT COUNT(*) dataRow FROM studentinfo WHERE classname = '$class'";
$status = mysqli_query($conn, $sql);
if (mysqli_num_rows($status))
    $dataRow = ceil(mysqli_fetch_assoc($status)['dataRow'] / $showPageCount);

// 回傳 每頁筆數 的限制數量
$sql = "SELECT *
        FROM studentinfo
        WHERE classname = '$class'
        LIMIT $start, $showPageCount";

$info = mysqli_query($conn, $sql);
$data = array();
if (mysqli_num_rows($info) > 0) {
    $dataPath = dirname(__FILE__, 3) . '\data';
    if (!file_exists($dataPath)) @mkdir($dataPath);
    while ($row = mysqli_fetch_assoc($info)) {
        $sid = $row['sid'];
        $name = $row['name'];
        $path = "$dataPath\\$sid"."_"."$name";
        if (!file_exists($path)) @mkdir($path);
        $data[] = $row;
    }
    
    echo json_encode([$dataRow, $data]);
}

mysqli_close($conn);