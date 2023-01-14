<?php

include_once('../db.php');

$dataTable = $_POST['datatable'];
$data = $_POST['data'];

$bool = true;

for ($i = 0; $i < count($data); $i++) {
    $row = $data[$i];    
    try
    {
        $sql = "INSERT INTO $dataTable VALUES('$row[0]', '$row[1]')";
        $status = mysqli_query($conn, $sql);
        $bool = $status;
    }
    catch (Exception $err)
    {
        try
        {
            $sql = "INSERT INTO $dataTable VALUES(null, '$row[0]', '$row[1]')";
            $status = mysqli_query($conn, $sql);
            $bool = $status;
        }
        catch (Exception $err)
        {
            $bool = false;
        }
    }
}

echo $bool;