<?php

require_once('./createClass.php');

$sql = "SELECT id, showclassname, permission, CONCAT(classname, id) AS dbClassName, lastRecordTime, CONCAT(TIMESTAMPDIFF(MONTH, CURRENT_TIMESTAMP, lastRecordTime), '月') AS keepTime
        FROM classmanage
        ORDER BY lastRecordTime DESC";
$status = mysqli_query($conn, $sql);

if (mysqli_num_rows($status) > 0)
    echo json_encode(mysqli_fetch_all($status));

mysqli_close($conn);