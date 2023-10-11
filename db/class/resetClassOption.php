<?php

require_once '../db.php';

$dataTable = (isset($_POST['dataTable'])) ? $_POST['dataTable'] : 'none';

if ($dataTable != 'none') {
    $sql = "SELECT showclassname, classname
            FROM $dataTable
            WHERE permission = '1'";
    $items = mysqli_query($conn, $sql);
    if (mysqli_num_rows($items) > 0)
        echo json_encode(mysqli_fetch_all($items, MYSQLI_ASSOC));
    else
        echo false;
} else
    echo false;