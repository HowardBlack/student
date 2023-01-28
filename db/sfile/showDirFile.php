<?php


if (isset($_POST['data']))
{
    $sInfo = $_POST['data'];
    $sid = $sInfo['sid'];
    $name = $sInfo['name'];
    $fileName = array();
    
    $path = "../../data/$sid"."_"."$name";
    $files = array_diff(scandir($path), array('..', '.'));        
    foreach ($files as $file)
        $fileName[] = $file;

    echo (count($fileName) > 0) ? json_encode($fileName) : false;
}
else
    echo false;

