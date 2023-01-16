<?php

require_once('./db.php');

$dataTable = $_POST['dataTable'];
$condition = '';
$data = $_POST['data'];
if ($dataTable == 'studentinfo') {
    $condition = 'sid';
    foreach ($data as $value) {
        $path = "../../data/$value";
        if (file_exists($path)) rmdir($path);
    }
}    
elseif ($dataTable == 'columnname')
$condition = 'type';
elseif ($dataTable == 'columnitems')
$condition = 'id';
elseif ($dataTable == 'itemlevel')
$condition = 'typeLevel';
elseif ($dataTable == 'choiceitem')
$condition = 'id';


$bool = true;
foreach ($data as $value) {    
    try
    {
        $sql = "DELETE FROM $dataTable WHERE $condition = '$value'";
        $status = mysqli_query($conn, $sql);
        $bool = $status;
    }
    catch (Exception $err)
    {
        $bool = false;
        break;
    }
}

echo $bool;

