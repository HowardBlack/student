<?php

require './readSheet.php';

$randclass = array();
foreach ($data as $class)
{
    foreach ($class as $cls)
    {
        $RANDOM_CLASSDB_NAME = generateRandomString();
        $insert = "INSERT INTO classmanage(showclassname, classname)
                   VALUES ('$cls', '$RANDOM_CLASSDB_NAME');";

        if (mysqli_query($conn, $insert)) $randclass[$cls] = $RANDOM_CLASSDB_NAME;
    }
}
echo json_encode($randclass);

// 產生資料庫名稱
function generateRandomString($length = 8)
{
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++)
        $randomString .= $characters[rand(0, $charactersLength - 1)];    
    return $randomString;
}