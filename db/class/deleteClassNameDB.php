<?php

require_once('./createClass.php');

$data = $_POST['data'];
$dbname = [];
$status = false;
foreach ($data as $key => $id) {
    $sql = "SELECT CONCAT(classname, id) as classname
            FROM classmanage
            WHERE id = $id";
    $status = mysqli_query($conn, $sql);
    if (mysqli_num_rows($status) > 0) {
        $dbname[$key] = (mysqli_fetch_assoc($status)['classname']);
        $sql = "DELETE FROM classmanage WHERE id = $id";
        $status = mysqli_query($conn, $sql);
    }
}

$conn = mysqli_connect('localhost', 'root', '');
foreach ($dbname as $value) {
    try {
        $sql = "DROP DATABASE $value";
        $status = mysqli_query($conn, $sql);
    }catch(Exception $err) {

    }
}

echo $status;
