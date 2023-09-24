<?php

require_once '../db.php';

// 確認資料庫是否可連線
if (!$conn) die("查無資料庫，請聯繫系統管理員，謝謝！");

$sql = "TRUNCATE TABLE studentinfo;
        TRUNCATE TABLE columnname;
        TRUNCATE TABLE columnitems;
        TRUNCATE TABLE itemlevel;
        TRUNCATE TABLE choiceitem;
        TRUNCATE TABLE classmanage;";
print (mysqli_multi_query($conn, $sql)) ? "資料庫重置成功，請確認。": "資料庫重置失敗，請聯繫管理員，謝謝！";
