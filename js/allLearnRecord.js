let searchData = 'none'
let checkMonth = []
$('#nameList').change((e) => {
    const selectValue = e.target.value
    searchData = (selectValue != '請選擇') ? selectValue : 'none'
    loadAllRecord(className, searchData, checkMonth)
})

const allchBox = document.querySelectorAll('input[type=checkbox]')
allchBox.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            checkMonth.push(e.target.value)
        }else {
            checkMonth.splice(checkMonth.indexOf(e.target.value), 1)
        }
        loadAllRecord(className, searchData, checkMonth)
    })
})

function loadAllRecord(className, searchData='none', chMonth='none') {
    if (chMonth.length == 0) chMonth = 'none'
    $('#queryList').empty()
    if (valid_dbName(className)) {
        $.ajax({
            url: './db/record/loadRecord.php',
            method: 'POST',
            dataType: 'JSON',
            data: {
                class: className,
                search: searchData,
                month: chMonth,
            },
            success(data) {
                if (data.length) {
                    for (let row of data) {
                        $('#queryList').append(
                            `<tr align=center>
                                <td>${row[1]}</td>
                                <td>${row[2]}</td>
                                <td>${row[3]}</td>
                                <td>${row[4]}</td>
                                <td>${row[5]}</td>
                                <td>${row[6]}</td>
                                <td>
                                    <button class='btn btn-danger' onclick=delRecord(${row[0]})>刪除</button>
                                </td>
                            </tr>`
                        )
                    }
                }else
                    $('#queryList').append(`<tr><td colspan=${row.length - 1}>查無資料！</td></tr>`)                    
            },
            error() {
                $('#queryList').append(`<tr><td colspan=7>查無資料！</td></tr>`)
            }
        })
    }else {
        $('#queryList').append(`<tr><td colspan=7>尚未選擇班級！</td></tr>`)
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