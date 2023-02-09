<?php

require_once('../db.php');

$search = $_POST['search'];
$month = $_POST['month'];
$searchCol = $_POST['searchCol'];
$searchItem = $_POST['searchItem'];
$sql = '';

$where[0] = "i.classname = '$class'";

if ($search != 'none')
    $where[1] = "s.name = '$search'";
if (is_array($month)) {
    $or = '';
    $or .= '(';
    foreach ($month as $key => $value)
        $arr[$key] = $value;
    $or .= implode(', ', $arr) . ')';
    $where[2] = "i.recordMonth IN $or";
}
if ($searchCol != 'none')
    $where[3] = "i.type = '$searchCol'";
if ($searchItem != 'none')
    $where[4] = "i.item = '$searchItem'";

$where = implode(' AND ', $where);
$sql = "SELECT i.id, i.sid, s.name, n.typeName, l.level, item.item, i.remark, i.recordMonth, i.lastRecordTime
        FROM choiceitem i
        JOIN studentinfo s ON (s.classname = '$class' AND i.sid = s.sid)
        JOIN columnname n ON (n.classname = '$class' AND i.type = n.type)
        JOIN columnitems item ON (item.classname = '$class') AND (i.type = item.type AND i.item = item.id)
        JOIN itemlevel l ON (l.classname = '$class' AND i.typeLevel = l.type)
        WHERE $where
        ORDER BY l.type DESC, i.recordMonth DESC";

// if (empty($where))
//     $sql = "SELECT i.id, i.sid, s.name, n.typeName, l.itemLevel, item.item, i.remark, i.recordMonth, i.lastRecordTime
//             from choiceitem i
//             JOIN studentinfo s ON i.sid = s.sid
//             JOIN columnname n ON i.type = n.type
//             JOIN columnitems item ON (i.type = item.type AND i.item = item.id)
//             JOIN itemlevel l ON i.typeLevel = l.typeLevel
//             ORDER BY l.typeLevel DESC, i.recordMonth DESC";
// else {
//     $where = implode(' AND ', $where);
//     $sql = "SELECT i.id, i.sid, s.name, n.typeName, l.itemLevel, item.item, i.remark, i.recordMonth, i.lastRecordTime
//             from choiceitem i
//             JOIN studentinfo s ON i.sid = s.sid
//             JOIN columnname n ON i.type = n.type
//             JOIN columnitems item ON (i.type = item.type AND i.item = item.id)
//             JOIN itemlevel l ON i.typeLevel = l.typeLevel
//             WHERE $where
//             ORDER BY l.typeLevel DESC, i.recordMonth DESC";
// }

$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0)
    echo json_encode(mysqli_fetch_all($result, MYSQLI_ASSOC));

mysqli_close($conn);