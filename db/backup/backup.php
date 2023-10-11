<?php

// 引入自有 DB 連線
require_once '../db.php';

// 確認是否可以連線資料庫
if (!$conn) die('查無資料庫可備份，請聯繫系統管理員確定，謝謝！');

// 設定備份連線資訊
$dbName = 'classdb';
$hostName = 'localhost';
$userName = 'root';
$password = 'chihlee168@@';
$exportFileName = Date("Y-m-d_A_h_i_s") . '.sql';
$saveFilePath = "./backupFiles/$exportFileName";
$port = '3307';

$command = "mariadb-dump --host=localhost --port=3307 --user=root --password=chihlee168@@ --databases classdb > $saveFilePath";
// echo $command;
exec($command, $result_code);
var_dump($result_code);