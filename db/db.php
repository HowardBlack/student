<?php

date_default_timezone_set("Asia/Taipei");

$status = false;
$sql = '';
$class = '';
try
{
    $class = (isset($_POST['class'])) ? $_POST['class'] : 'none';
    $conn = mysqli_connect('localhost', 'root', '', 'classdb');
}
catch (Exception $e)
{
    $conn = mysqli_connect('localhost', 'root', '');
    $sql = "CREATE DATABASE classdb";
    if (mysqli_query($conn, $sql))
    {
        $conn = mysqli_connect('localhost', 'root', '', 'classdb');
        $sql = "CREATE TABLE classmanage (
                    id INT AUTO_INCREMENT,
                    showclassname VARCHAR(255) NOT NULL,
                    classname VARCHAR(255) NOT NULL,
                    permission BOOLEAN DEFAULT 0 NOT NULL,
                    lastRecordTime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                    PRIMARY KEY (id, classname)
                );
                CREATE TABLE studentinfo (
                    classname VARCHAR(255) NOT NULL,
                    sid VARCHAR(255) NOT NULL,
                    name VARCHAR(255) NOT NULL,
                    PRIMARY KEY (classname, sid, name)
                );
                CREATE TABLE columnname (
                    classname VARCHAR(255) NOT NULL,
                    type VARCHAR(255) NOT NULL,
                    typeName VARCHAR(255) NOT NULL,
                    PRIMARY KEY (classname, type, typeName)
                );
                CREATE TABLE columnitems (
                    classname VARCHAR(255) NOT NULL,
                    type VARCHAR(255) NOT NULL,
                    item VARCHAR(255) NOT NULL,
                    PRIMARY KEY (classname, type, item)                    
                );
                CREATE TABLE itemlevel (
                    classname VARCHAR(255) NOT NULL,
                    type VARCHAR(255) NOT NULL,
                    level VARCHAR(255) NOT NULL,
                    PRIMARY KEY (classname, type, level)
                );
                CREATE TABLE choiceitem(
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    classname VARCHAR(255) NOT NULL,
                    sid VARCHAR(255) NOT NULL,
                    type VARCHAR(255) NOT NULL,
                    item VARCHAR(255) NOT NULL,
                    typeLevel VARCHAR(255) NOT NULL,
                    remark VARCHAR(255) NOT NULL,
                    recordMonth INT(10) NOT NULL,
                    lastRecordTime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
                );";
        $status = mysqli_multi_query($conn, $sql);
    }
    echo $status;
}