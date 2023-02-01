<?php
// 班級，基本資料，欄位項目，欄位細項，程度

require '../db.php';
require '../../phpspreadsheet/vendor/autoload.php';

$sheetName = '';
if (isset($_POST['sheetName'])) $sheetName = $_POST['sheetName'];
$reader = new \PhpOffice\PhpSpreadsheet\Reader\Xlsx();
$reader -> setReadDataOnly(true);
$spreadsheet = $reader -> load("../../temp/class.xlsx");
$sheet = $spreadsheet -> getSheetByName("$sheetName");
$data = $sheet -> toArray();

// 移除第一列
unset($data[0]);
