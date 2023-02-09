<?php

require_once('db.php');

$data = $_POST['data'];

for ($i = 0; $i < count($data); $i++) { 
    $row = $data[$i];
    $sid = $row['sid'];
    $type = $row['type'];
    $item = $row['item'];
    $itemLevel = $row['itemLevel'];
    $itemValue = $row['itemValue'];
    $month = $row['month'];

    // data exist
    $search = "SELECT * FROM choiceitem
               WHERE (sid = '$sid' AND type = '$type') AND (item = '$item' AND recordMonth = '$month')";

    if (mysqli_num_rows(mysqli_query($conn, $search)) > 0) {
        // update data
        $sql = "UPDATE choiceitem
                SET remark = '$itemValue', typeLevel = '$itemLevel', lastRecordTime = CURRENT_TIMESTAMP
                WHERE (sid = '$sid' AND type = '$type') AND (item = '$item' AND recordMonth = '$month')";
    }else {
        // insert data
        $sql = "INSERT INTO choiceitem(classname, sid, type, item, typeLevel, remark, recordMonth)
                VALUES('$class', '$sid', '$type', '$item', '$itemLevel', '$itemValue', '$month')";
    }

    echo (mysqli_query($conn, $sql)) ? true : false;
}

mysqli_close($conn);