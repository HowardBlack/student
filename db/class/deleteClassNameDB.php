<?php

require '../db.php';

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
