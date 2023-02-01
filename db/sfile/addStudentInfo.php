<?php

require './readSheet.php';

$rankdbname = '';
if (isset($_POST['classname'])) $rankdbname = $_POST['classname'];
$className = '';
$status = false;
$value = array();

foreach ($data as $row)
{
    $className = $rankdbname[$row[0]];
    $value[] = "('$className', '$row[1]', '$row[2]')";
}
$value = implode(', ', $value);
$sql = "INSERT INTO $sheetName
        VALUES $value;";
echo mysqli_query($conn, $sql);