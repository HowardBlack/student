<?php

require_once('db.php');

$data = $_POST['data'];

for ($i=0; $i < count($data); $i++) { 
    $row = $data[$i];

    // data exist
    $search = "SELECT * FROM choiceitem
               WHERE (sid = '$row[0]' AND type = '$row[1]') AND (item = '$row[2]' AND recordMonth = '$row[5]')";

    if (mysqli_num_rows(mysqli_query($conn, $search)) > 0) {
        // update data
        $sql = "UPDATE choiceitem
                SET remark = '$row[4]', typeLevel = '$row[3]', lastRecordTime = CURRENT_TIMESTAMP
                WHERE (sid = '$row[0]' AND type = '$row[1]') AND (item = '$row[2]' AND recordMonth = '$row[5]')";
    }else {
        // insert data
        $sql = "INSERT INTO choiceitem(sid, type, item, typeLevel, remark, recordMonth)
                VALUES('$row[0]', '$row[1]', '$row[2]', '$row[3]', '$row[4]', '$row[5]')";
    }

    echo (mysqli_query($conn, $sql)) ? true : false;
}

mysqli_close($conn);