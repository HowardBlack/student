$('#class').change(function() {
  const className = this.value
  if (className != '請選擇') {
    validDB(className)
  }else {
    alert('請選擇班級！')
  }
})

function validDB(className) {
    $.ajax({
        url: './db/details.php',
        method: 'POST',
        dataType: 'JSON',
        data: {class: className},
        success(result) {
            console.log(result)
        },
        error() {
            // 自動建立資料庫及所需資料表
            createDB(className)
        }
    })
}

function createDB(className) {
    $.ajax({
        url: './db/createdb.php',
        method: 'POST',
        data: {class: className},
        success(bool) {
            (bool) ? createTable(className) : alert('已新增資料庫')
        },
        error() {
            alert('無法建立連線！')
        }
    })
}

function createTable(className) {
    $.ajax({
        url: './db/createtable.php',
        method: 'POST',
        data: {class: className},
        success(bool) {
            (bool) ? alert('新建成功！') : alert('新建失敗！')
        },
        error() {
            alert('無法建立連線！')
        }
    })
}
