<?php

require_once '../db.php';

// 確認資料庫是否可連線
if (!$conn) die("查無資料庫，請聯繫系統管理員，謝謝！");

$sql = "DROP DATABASE classdb;";
print (mysqli_query($conn, $sql)) ? "資料庫已成功刪除，請確認！" : "資料庫刪除失敗，請聯繫管理員，謝謝！";