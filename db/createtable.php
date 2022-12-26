<?php

// require_once('./db.php');

// create studentinfo datatable
$sql = "CREATE TABLE studentinfo (
    sid VARCHAR(20) PRIMARY KEY NOT NULL,
    name VARCHAR(20) NOT NULL
)";
if (mysqli_query($conn, $sql))
    // create columnname datatable
    $sql = "CREATE TABLE columnname(
        type VARCHAR(10) PRIMARY KEY NOT NULL,
        typeName VARCHAR(10) NOT NULL
    )";
    if (mysqli_query($conn, $sql))
        // create columnitems datatable
        $sql = "CREATE TABLE columnitems(
            id INT(3) AUTO_INCREMENT PRIMARY KEY,
            type VARCHAR(10) NOT NULL,
            item VARCHAR(30) NOT NULL
        )";
        if (mysqli_query($conn, $sql))
            // create choiceitems datatable
            $sql = "CREATE TABLE choiceitem(
                id INT(3) AUTO_INCREMENT PRIMARY KEY,
                sid VARCHAR(20) NOT NULL,
                type VARCHAR(10) NOT NULL,
                item VARCHAR(30) NOT NULL,
                remark VARCHAR(255) NOT NULL,
                recordMonth INT(2) NOT NULL,
                lastRecordTime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
            )";
            if (mysqli_query($conn, $sql))
                echo true;

mysqli_close($conn);