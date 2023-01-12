<?php

require_once('./createClass.php');

$data = $_POST['data'];

$dbname = [];
foreach ($data as $key => $id) {
    $sql = "SELECT classDBname
            FROM classnamedb
            WHERE id = $id";
    $status = mysqli_query($conn, $sql);
    if (mysqli_num_rows($status) > 0) {
        $dbname[$key] = (mysqli_fetch_assoc($status)['classDBname']);
        $sql = "DELETE FROM classnamedb WHERE id = $id";
        $status = mysqli_query($conn, $sql);
    }
}

$conn = mysqli_connect('localhost', 'root', '');
foreach ($dbname as $value) {
    $sql = "DROP DATABASE $value";
    $status = mysqli_query($conn, $sql);
}

echo $status;
