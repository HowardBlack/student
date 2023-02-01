<?php

require ('../db.php');

$data = '';
if (isset($_POST['data'])) $data = implode(', ', $_POST['data']);

// 尚未新增刪除其他資料表資料 (studentinfo, columnname, columnitems, itemlevel)
$sql = "DELETE FROM classmanage WHERE id IN($data)";
echo mysqli_query($conn, $sql);

// foreach ($data as $key => $id) {
//     $sql = "SELECT CONCAT(classname, id) as classname
//             FROM classmanage
//             WHERE id = $id";
//     $status = mysqli_query($conn, $sql);
//     if (mysqli_num_rows($status) > 0) {
//         $dbname[$key] = (mysqli_fetch_assoc($status)['classname']);
//         $sql = "DELETE FROM classmanage WHERE id = $id";
//         $status = mysqli_query($conn, $sql);
//     }
// }
