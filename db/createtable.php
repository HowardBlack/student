<?php

// require_once('./db.php');

// create studentinfo datatable
$sql = "CREATE TABLE studentinfo (
    sid VARCHAR(255) PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL
)";
if (mysqli_query($conn, $sql))
    // create columnname datatable
    $sql = "CREATE TABLE columnname(
        type VARCHAR(255) PRIMARY KEY NOT NULL,
        typeName VARCHAR(255) NOT NULL
    )";
    if (mysqli_query($conn, $sql))
        // create columnitems datatable
        $sql = "CREATE TABLE columnitems(
            id INT(20) AUTO_INCREMENT PRIMARY KEY,
            type VARCHAR(255) NOT NULL,
            item VARCHAR(255) NOT NULL
        )";
        if (mysqli_query($conn, $sql))

            $sql = "CREATE TABLE itemLevel(
                typeLevel VARCHAR(255) PRIMARY KEY,
                itemLevel VARCHAR(255) NOT NULL
            )";

            if (mysqli_query($conn, $sql))
                // create choiceitems datatable
                $sql = "CREATE TABLE choiceitem(
                    id INT(20) AUTO_INCREMENT PRIMARY KEY,
                    sid VARCHAR(255) NOT NULL,
                    type VARCHAR(255) NOT NULL,
                    item VARCHAR(255) NOT NULL,
                    typeLevel VARCHAR(255) NOT NULL,
                    remark VARCHAR(255) NOT NULL,
                    recordMonth INT(10) NOT NULL,
                    lastRecordTime DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
                )";
                if (mysqli_query($conn, $sql))
                    echo true;

mysqli_close($conn);