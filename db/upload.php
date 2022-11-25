<?php

require_once('db.php');

$data = $_POST['data'];

for ($i=0; $i < count($data); $i++) { 
    $row = $data[$i];

    // data exist
    $search = "SELECT * FROM choiceitem WHERE (sid = '$row[0]' AND type = '$row[1]') AND item = '$row[2]'";    
    $queryData = mysqli_query($conn, $search);

    if (mysqli_num_rows($queryData)) {
        // update data
        $sql = "UPDATE choiceitem SET remark = '$row[3]' WHERE (sid = '$row[0]' AND type = '$row[1]') AND item = '$row[2]'";
    }else {
        // insert data
        $sql = "INSERT INTO choiceitem(sid, type, item, remark, recordMonth) VALUES('$row[0]', '$row[1]', '$row[2]', '$row[3]', '$row[4]')";        
    }

    // if (mysqli_query($conn, $sql)) echo ; else echo 'fail';
    try {
        $status = mysqli_query($conn, $sql);
    }catch (Exception $err) {
        echo false;
        break;
    }
}