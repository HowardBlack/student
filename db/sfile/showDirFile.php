<?php

try
{
    $sInfo = $_POST['data'];
    $sid = $sInfo['sid'];
    $name = $sInfo['name'];
    try
    {
        $path = "../../data/$sid"."_"."$name";
        $files = array_diff(scandir($path), array('..', '.'));
        $fileName = array();
        foreach ($files as $file) {
            $fileName[] = $file;
        }
        echo (count($fileName) > 0) ? json_encode($fileName) : false;
    }
    catch (Exception $e)
    {
        echo false;
    }
    
}
catch (Exception $e)
{
    echo false;
}

