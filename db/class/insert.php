<?php

require_once('../db.php');

try {
    $dataTable = $_POST['datatable'];
    $data = $_POST['data'];
    $status = false;

    foreach ($data as $key => $row) {
        $sql = "INSERT INTO $dataTable(showclassname, classname)
                VALUES ('$row[0]', '$row[1]')";
        $status = mysqli_query($conn, $sql);
        if (!$status) break;
    }
    echo $status;

}catch(Exception $e) {
    echo false;
}

mysqli_close($conn);
