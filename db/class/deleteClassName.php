<?php

require_once('./createClass.php');

$data = $_POST['data'];

foreach ($data as $id) {
    $sql = "DELETE FROM classmanage WHERE id = $id";
    $status = mysqli_query($conn, $sql);
}

echo $status;