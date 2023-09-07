<?php

$bool = false;
if (isset($_FILES['file']))
{
    $file = $_FILES['file'];
    $tempPath = dirname(__FILE__, 3) . '\temp\\';
    if (!file_exists($tempPath)) mkdir($tempPath);
    foreach ($file['error'] as $key => $value)
    {
        $temp_name = $file['tmp_name'][$key];
        $name = $file['name'][$key];
        $bool = move_uploaded_file($temp_name, "$tempPath/$name");
        echo ($bool) ? $name : false;
    }
}