let columns = []
let className = "請選擇"

$('#class').change((e) => {
    columns = []
    className = e.target.value
    refresh(className)
})

function refresh(className) {
    validDB(className)
    loadClass(className)
    loadInfo(className)
    loadCol(className)
    loadItems(className)
    defaultAddType(className)
}

function validDB(className) {
    if (className != '請選擇') {
        $.ajax({
            url: './db/db.php',
            method: 'POST',
            data: {class: className},
            success(bool) {
                if (bool) alert('自動新建資料庫&資料表成功')
            },
            error() {
                alert('無法連接');
            }
        })
    }else {
        alert('請選擇班級！')
    }
}