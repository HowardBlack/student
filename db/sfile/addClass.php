<?php

require './readSheet.php';

foreach ($data as $key => $class)
    foreach ($class as $cls)
        validClassManage($cls);    

function validClassManage($className)
{
    require '../class/createClass.php';
    $sql = "SELECT CONCAT(classname, id) as dbName
            FROM classmanage
            WHERE showclassname = '$className';";
    $item = mysqli_query($conn, $sql);
    $dbName = '';
    // 判斷資料庫是否存在班級名稱    
    if (mysqli_num_rows($item) > 0)
        $dbName = mysqli_fetch_assoc($item)['dbName'];        
    else
    {
        $RANDOM_CLASSDB_NAME = generateRandomString();
        $insert = "INSERT INTO classmanage(showclassname, classname)
                   VALUES ('$className', '$RANDOM_CLASSDB_NAME');";
        if (mysqli_query($conn, $insert))
        {
            $item = mysqli_query($conn, $sql);
            if (mysqli_num_rows($item) > 0)
                $dbName = mysqli_fetch_assoc($item)['dbName'];        
        }
    }
    validDB($dbName);
}

// 判斷班級資料庫是否存在
function validDB($className)
{
    echo $className."\n";
    $conn = $sql = '';
    try
    {
        $conn = mysqli_connect('localhost', 'root', '', "$className");
    }
    catch (Exception $e)
    {
        $conn = mysqli_connect('localhost', 'root', '');
        $sql = "CREATE DATABASE $className";
        if (mysqli_query($conn, $sql))
        {
            $conn = mysqli_connect('localhost', 'root', '', "$className");
            require '../createtable.php';
        }
    }
}

// 產生資料庫名稱
function generateRandomString($length = 8)
{
    $characters = 'abcdefghijklmnopqrstuvwxyz';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++)
        $randomString .= $characters[rand(0, $charactersLength - 1)];    
    return $randomString;
}