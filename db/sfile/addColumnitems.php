<?php

require './readSheet.php';

$className = $sql = '';
$status = false;
foreach ($data as $row)
{
    $currentClass = $row[0];
    if (empty($className))
        $className = getClassDB($currentClass);
    elseif ($currentClass != $className)
        $className = getClassDB($currentClass);    

    // 多次連結降低效能
    $conn = mysqli_connect('localhost', 'root', '', "$className");
    $sql = "INSERT INTO columnitems
            VALUES (NULL, '$row[1]', '$row[2]');";
    $status = mysqli_query($conn, $sql);
}
echo $status;

// 取得班級資料庫名稱
function getClassDB($className)
{
    try
    {
        $conn = mysqli_connect('localhost', 'root', '', 'classdb');
        $sql = "SELECT CONCAT(classname, id) AS dbName
                FROM classmanage
                WHERE showclassname = '$className'";
        $item= mysqli_query($conn, $sql);
        
        if (mysqli_num_rows($item) > 0)
            return mysqli_fetch_assoc($item)['dbName'];
    }
    catch (Exception $e) {}
}
