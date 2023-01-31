<?php

$filenames = '';
if (isset($_POST['fileName']))
{
    $filenames = $_POST['fileName'];
    foreach ($filenames as $filename)
    {        
        $filepath = dirname(__FILE__, 4) . $filename;
        unlink("$filepath");
    }
    echo true;
}
else
    echo false;