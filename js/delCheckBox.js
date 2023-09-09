let delAllCheck = []

$('#infoBoxDel').click(function() {
    blockMenu = 'info'
    filterCheckbox(blockMenu, delAllCheckbox)
})

$('#infoCbAll').click(function() {
    blockMenu = 'info'
    cbAll(blockMenu)
})

$('#colBoxDel').click(function() {
    blockMenu = 'col'
    filterCheckbox(blockMenu, delAllCheckbox)
})

$('#colCbAll').click(function() {
    blockMenu = 'col'
    cbAll(blockMenu)
})

$('#itemBoxDel').click(function() {
    blockMenu = 'item'
    filterCheckbox(blockMenu, delAllCheckbox)
})

$('#itemCbAll').click(function() {
    blockMenu = 'item'
    cbAll(blockMenu)
})

$('#levelBoxDel').click(function() {
    blockMenu = 'level'
    filterCheckbox(blockMenu, delAllCheckbox)
})

$('#levelCbAll').click(function() {
    blockMenu = 'level'
    cbAll(blockMenu)
})

$('#choiceBoxDel').click(function() {
    blockMenu = 'choice'
    filterCheckbox(blockMenu, delAllCheckbox)
})

$('#choiceCbAll').click(function() {
    blockMenu = 'choice'
    cbAll(blockMenu)
})

$('#clasBoxDel').click(function() {
    blockMenu = 'clas'
    filterCheckbox(blockMenu, delAllcb)
})

$('#clasCbAll').click(function() {
    blockMenu = 'clas'
    cbAll(blockMenu)
})


function setBlockMean(b, s, load) {
    if (b == 'choice') initAllRecordCondition();
    blockMenu = b
    dtName = s
    loadName = load
    page = 1
    showPageCount = 10
    $('#limit1').prop('checked', true)
    $('#paginationList').val(page)
    loadName(className)
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
                page = 1
                loadName(className)
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
        url: './db/class/deleteClassNameDB.php',
        method: 'POST',
        data: {data: data},
        success(bool) {
            if (bool) {
                page = 1
                loadName(className)
                alert('刪除成功')
            }
        },
        error() {
            alert('無法連接')
        }
    })
}

// 選取所有 checkbox
function cbAll(blockMenu) {
    $(`input[name=${blockMenu}]`).each(function(index, item) {
        item.checked = !item.checked
    })
}
