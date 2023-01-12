let delAllCheck = []

$('#infoBoxDel').click(function() {
    filterCheckbox(blockMenu, delAllCheckbox)
})

$('#colBoxDel').click(function() {
    filterCheckbox(blockMenu, delAllCheckbox)
})

$('#itemBoxDel').click(function() {
    filterCheckbox(blockMenu, delAllCheckbox)
})

$('#levelBoxDel').click(function() {
    filterCheckbox(blockMenu, delAllCheckbox)
})

$('#choiceBoxDel').click(function() {
    filterCheckbox(blockMenu, delAllCheckbox)
})

$('#clasBoxDel').click(function() {
    filterCheckbox(blockMenu, delAllcb)
})

$('#dbBoxDel').click(function() {
    blockMenu = 'db'
    filterCheckbox(blockMenu, delAllcbDB)
})

$('#dbAll').click(function() {
    blockMenu = 'db'
    cbAll()    
})

function setBlockMean(b, s) {
    blockMenu = b
    dtName = s
}

function filterCheckbox(blockMenu, callback) {
    delAllCheck = []
    $(`input[name=${blockMenu}]:checked`).each(function(index, item) {
        delAllCheck.push(item.value)
    })
    if (delAllCheck.length)
        callback(delAllCheck)
}

// 刪除非班級的所有 checkbox
function delAllCheckbox(data) {
    // ajax
    $.ajax({
        url: './db/delAllCheckedBox.php',
        method: 'POST',
        data: {class: className, dataTable: dtName, data: data},
        success(bool) {
            if (bool) {
                refresh(className)
                setTimeout(() => {
                    alert('刪除成功')
                  }, 0.5)
            }
            else
                alert('刪除失敗')
        },
        error() {
            alert('無法連接')
        }
    })
}

// 刪除班級的所有 checkbox
function delAllcb(data) {
    $.ajax({
        url: './db/class/deleteClassName.php',
        method: 'POST',
        data: {data: data},
        success(bool) {
            if (bool) {
                refreshClassName()
                alert('刪除成功')
            }
        },
        error() {
            alert('無法連接')
        }
    })
}

function delAllcbDB(data) {
    $.ajax({
        url: './db/class/deleteClassNameDB.php',
        method: 'POST',
        data: {data: data},
        success(bool) {
            if (bool) {
                refreshClassName()
                allClassDB()
                alert('刪除成功')
            }
        },
        error() {
            alert('無法連接')
        }
    })
}

// 選取所有 checkbox
function cbAll() {

    $(`input[name=${blockMenu}]`).each(function(index, item) {
        item.checked = true
    })

    // $(`input[name=${blockMenu}]:checked`).each(function(index, item) {
    //     item.checked = false
    // })
}
