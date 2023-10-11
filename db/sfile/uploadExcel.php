<?php

date_default_timezone_set("Asia/Taipei");

$bool = false;
if (isset($_FILES['file']))
{
    $file = $_FILES['file'];
    $tempPath = dirname(__FILE__, 4) . '\ExcelFileUpload\\';
    if (!file_exists($tempPath)) mkdir($tempPath);
    foreach ($file['error'] as $key => $value)
    {
        $temp_name = $file['tmp_name'][$key];
        $now = date("Y_m_d_h_i_sa");
        $name = $now . "-" . $file['name'][$key];
        $bool = move_uploaded_file($temp_name, "$tempPath/$name");
        echo ($bool) ? $name : false;
    }
}