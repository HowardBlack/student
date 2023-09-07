<?php
// 班級，基本資料，欄位項目，欄位細項，程度

require_once '../db.php';
require_once '../../phpspreadsheet/vendor/autoload.php';

$sheetName = $uploadFileName = '';
if (isset($_POST['sheetName'])) $sheetName = $_POST['sheetName'];
if (isset($_POST['fileName'])) $uploadFileName = $_POST['fileName'];
$reader = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();
$reader -> setReadDataOnly(true);
$spreadsheet = $reader -> load("../../temp/$uploadFileName");
$sheet = $spreadsheet -> getSheetByName("$sheetName");
$data = $sheet -> toArray();

// 移除第一列
unset($data[0]);
