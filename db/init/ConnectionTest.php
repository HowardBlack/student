<?php

// 引入自訂資料庫類別
// require_once './api/dbconfig.php';

// $host = 'localhost';
// $port = '3307';
// $username = 'root';
// $password = 'chihlee168@@';
// $dbName = 'classdb';

// $db = new Database($host, $dbName, $username, $password);

require_once '../db.php';

// 確認資料庫是否可連線
if (!$conn) die("資料庫連線失敗：" . mysqli_connect_error());
print "資料庫連線成功";