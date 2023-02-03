<?php
$bool = false;
if (isset($_FILES['learnfile']) and isset($_POST['sinfo']))
{
    $file = $_FILES['learnfile'];
    $sinfo = $_POST['sinfo'];
    
    $datapath = dirname(__FILE__, 4) . "\data\\" . "$sinfo[0]_$sinfo[1]";
    echo $datapath;

    foreach ($file['error'] as $key => $value)
    {
        $temp_name = $file['tmp_name'][$key];
        $name = $file['name'][$key];
        $bool = move_uploaded_file($temp_name, "$datapath\\$name");
    }
}
echo $bool;