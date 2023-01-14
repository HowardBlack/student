<?php

require_once('./createClass.php');

$status = false;
try
{
    $data = $_POST['data'];
    $dbname = [];

    foreach ($data as $key => $id) {
        // $sql = "DELETE FROM classmanage WHERE id = $id";
        // if (mysqli_query($conn, $sql)) {
        //     try {
        //         $connN = mysqli_connect('localhost', 'root', '')
        //     }
        // }
        $sql = "SELECT classname FROM classmanage";
        $status = mysqli_query($conn, $sql);
    }
    
}
catch (Exception $e)
{
    echo false;
}