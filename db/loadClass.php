<?php

require_once('db.php');

$info = mysqli_query($conn, "SELECT * FROM studentinfo WHERE classname = '$class'");

$data = array();
if (mysqli_num_rows($info) > 0) {
    // echo json_encode(mysqli_fetch_all($info));
    // echo json_encode(mysqli_fetch_all($info, MYSQLI_ASSOC));
    $dataPath = dirname(__FILE__, 3) . '\data';
    if (!file_exists($dataPath)) @mkdir($dataPath);
    while ($row = mysqli_fetch_assoc($info)) {
        $sid = $row['sid'];
        $name = $row['name'];
        $path = "$dataPath\\$sid"."_"."$name";
        if (!file_exists($path)) @mkdir($path);
        $data[] = $row;
    }
    echo json_encode($data);
}

mysqli_close($conn);