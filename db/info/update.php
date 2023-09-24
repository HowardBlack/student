<?php

require_once '../db.php';

$data = (isset($_POST['data'])) ? $_POST['data'] : 'none';

if ($data != 'none')
{
    $sid = $data['sid'];
    $originName = $data['originName'];
    $newName = $data['newName'];
    $newClassName = $data['newClassName'];

    $path = dirname(__FILE__, 4) . "\data\\$sid" . "_$originName";
    $searchResult = glob($path);
    if (count($searchResult) > 0)
        rename($searchResult[0], dirname(__FILE__, 4) . "\data\\$sid" . "_$newName");

    $sql = "UPDATE studentinfo
            SET classname = '$newClassName', name = '$newName'
            WHERE (classname = '$class' AND sid = '$sid')";

    echo mysqli_query($conn, $sql);
}