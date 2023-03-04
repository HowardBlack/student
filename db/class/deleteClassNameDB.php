<?php

require '../db.php';

// 無法刪除 data 資料夾的學生資料
$data = '';
if (isset($_POST['data'])) {
    $data = implode(', ', $_POST['data']);    
    $sql = "DELETE FROM classmanage WHERE classname IN($data);
            DELETE FROM studentinfo WHERE classname IN($data);
            DELETE FROM columnname WHERE classname IN($data);
            DELETE FROM columnitems WHERE classname IN($data);
            DELETE FROM itemlevel WHERE classname IN($data);
            DELETE FROM choiceitem WHERE classname IN($data);";
    echo mysqli_multi_query($conn, $sql);
}
