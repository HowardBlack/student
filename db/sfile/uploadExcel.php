<?php

$bool = false;
if (isset($_FILES['file']))
{
    $file = $_FILES['file'];
    $tempPath = '../../temp/';
    foreach ($file['error'] as $key => $value)
    {
        $temp_name = $file['tmp_name'][$key];
        $name = $file['name'][$key];
        $bool = move_uploaded_file($temp_name, "$tempPath/$name");
    }
}
echo $bool;