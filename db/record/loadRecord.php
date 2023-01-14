<?php

require_once('../db.php');

$search = $_POST['search'];
$month = $_POST['month'];
$searchCol = $_POST['searchCol'];
$searchItem = $_POST['searchItem'];
$sql = '';

if ($search != 'none')
    $where[0] = "s.name = '$search'";
if (is_array($month)) {
    $or = '';
    $or .= '(';
    foreach ($month as $key => $value)
        $arr[$key] = $value;
    $or .= implode(', ', $arr) . ')';
    $where[1] = "i.recordMonth IN $or";
}
if ($searchCol != 'none')
    $where[2] = "i.type = '$searchCol'";
if ($searchItem != 'none')
    $where[3] = "i.item = '$searchItem'";

if (empty($where))
    $sql = "SELECT i.id, i.sid, s.name, n.typeName, l.itemLevel, i.item, i.remark, i.recordMonth, i.lastRecordTime
            from choiceitem i
            JOIN studentinfo s ON i.sid = s.sid
            JOIN columnname n ON i.type = n.type
            JOIN itemlevel l ON i.typeLevel = l.typeLevel
            ORDER BY l.typeLevel DESC, i.recordMonth DESC";
else {
    $where = implode(' AND ', $where);
    $sql = "SELECT i.id, i.sid, s.name, n.typeName, l.itemLevel, i.item, i.remark, i.recordMonth, i.lastRecordTime
            from choiceitem i
            JOIN studentinfo s ON i.sid = s.sid
            JOIN columnname n ON i.type = n.type
            JOIN itemlevel l ON i.typeLevel = l.typeLevel
            WHERE $where
            ORDER BY l.typeLevel DESC, i.recordMonth DESC";
}

$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0)
    echo json_encode(mysqli_fetch_all($result));

mysqli_close($conn);