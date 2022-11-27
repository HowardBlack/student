<?php

require_once('../db.php');

$search = $_POST['search'];
$month = $_POST['month'];
$sql = '';

if ($search == 'none' and $month == 'none')
    $sql = "SELECT i.id, i.sid, s.name, i.type, i.item, i.remark, i.recordMonth
            from choiceitem i
            JOIN studentinfo s
            ON i.sid = s.sid
            ORDER BY i.sid, i.recordMonth DESC";
elseif ($search != 'none' and is_array($month)) {
    $or = '';
    $or .= '(';
    foreach ($month as $key => $value)
        $arr[$key] = $value;
    $or .= implode(', ', $arr) . ')';
    $sql = "SELECT i.id, i.sid, s.name, i.type, i.item, i.remark, i.recordMonth
            from choiceitem i 
            JOIN studentinfo s 
            ON i.sid = s.sid 
            WHERE s.name = '$search' and i.recordMonth IN $or
            ORDER BY i.sid, i.recordMonth DESC";
}elseif ($search != 'none')
    $sql = "SELECT i.id, i.sid, s.name, i.type, i.item, i.remark, i.recordMonth
            from choiceitem i 
            JOIN studentinfo s 
            ON i.sid = s.sid 
            WHERE s.name = '$search'
            ORDER BY i.sid, i.recordMonth DESC";
else {
    $or = '';
    $or .= '(';
    foreach ($month as $key => $value)
        $arr[$key] = $value;
    $or .= implode(', ', $arr) . ')';
    $sql = "SELECT i.id, i.sid, s.name, i.type, i.item, i.remark, i.recordMonth
            from choiceitem i 
            JOIN studentinfo s 
            ON i.sid = s.sid 
            WHERE i.recordMonth IN $or
            ORDER BY i.sid, i.recordMonth DESC";
}

$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0)
    echo json_encode(mysqli_fetch_all($result));
