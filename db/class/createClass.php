<?php

date_default_timezone_set("Asia/Taipei");

$status = false;
try {
    $conn = mysqli_connect('localhost', 'root', '', 'classdb');
}catch (Exception $e){
    $conn = mysqli_connect('localhost', 'root', '');
    $sql = "CREATE DATABASE classdb";
    if (mysqli_query($conn, $sql)) {
        $conn = mysqli_connect('localhost', 'root', '', 'classdb');
        $sql = "CREATE TABLE classmanage (
                    id INT(20) AUTO_INCREMENT,
                    showclassname VARCHAR(255) NOT NULL,
                    classname VARCHAR(255) NOT NULL,
                    permission BOOLEAN DEFAULT 0 NOT NULL,
                    lastRecordTime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                    PRIMARY KEY (id, classname)
                )";
        $status = mysqli_query($conn, $sql);
    }
}

echo $status;