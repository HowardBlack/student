<?php

require_once '../db.php';

// 確認資料庫是否可連線
if ($conn) die('資料庫已建立，請確認，謝謝！');

// create init database
$conn = mysqli_connect('localhost', 'root', 'chihlee168@@', '', '3307');
$sql = "CREATE DATABASE classdb;
GRANT ALL PRIVILEGES ON classdb.* TO root@localhost;
USE classdb;
CREATE TABLE classmanage (
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
    id INT AUTO_INCREMENT,
    classname VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    item VARCHAR(255) NOT NULL,
    PRIMARY KEY (id, classname, type, item)                    
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
print mysqli_multi_query($conn, $sql) ? '資料庫建立完成' : '資料庫建立失敗，請系統管理員確認，謝謝。';
