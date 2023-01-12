<?php

require_once('../db.php');

$sql = "SELECT item.id, col.typeName, item.item
        FROM columnitems item
        JOIN columnname col ON item.type = col.type
        WHERE item.type = col.type";
// $items = mysqli_query($conn, "SELECT * FROM columnitems");
$items = mysqli_query($conn, $sql);

if (mysqli_num_rows($items) > 0)
    echo json_encode(mysqli_fetch_all($items));
