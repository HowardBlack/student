function loadAllRecord(className) {
    $('#queryList').empty()
    if (valid_dbName(className)) {
        $.ajax({
            url: './db/record/loadRecord.php',
            method: 'POST',
            dataType: 'JSON',
            data: {
                class: className,
            },
            success(data) {
                for (let row of data) {
                    $('#queryList').append(
                        `<tr align=center>
                            <td>${row[1]}</td>
                            <td>${row[2]}</td>
                            <td>${row[3]}</td>
                            <td>${row[4]}</td>
                            <td>${row[5]}</td>
                            <td>
                                <button class='btn btn-danger' onclick=delRecord(${row[0]})>刪除</button>
                            </td>
                        </tr>`
                    )
                }
            },
            error() {
                $('#queryList').append('<tr><td colspan=6>查無資料！</td></tr>')
            }
        })
    }else {
        $('#queryList').append('<tr><td colspan=4>尚未選擇班級！</td></tr>')
    }
}

function delRecord(id) {
    if (confirm('確定刪除嗎?')) {
        $.ajax({
            url: './db/record/del.php',
            method: 'POST',
            data: {
                class: className,
                id: id,
            },
            success(bool) {
                if (bool) {
                    refresh(className)
                    setTimeout(() => {
                    alert('刪除成功')
                    }, 0.5)
                }else
                    alert('刪除失敗')
            },
            error() {
                alert('無法連接')
            }
        })
    }
}