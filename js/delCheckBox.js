let delAllCheck = []

$('#infoBoxDel').click(function() {
    filterCheckbox(blockMenu)
})

$('#colBoxDel').click(function() {
    filterCheckbox(blockMenu)
})

$('#itemBoxDel').click(function() {
    filterCheckbox(blockMenu)
})

$('#levelBoxDel').click(function() {
    filterCheckbox(blockMenu)
})

$('#choiceBoxDel').click(function() {
    filterCheckbox(blockMenu)
})

function setBlockMean(b, s) {
    blockMenu = b
    dtName = s
}

function filterCheckbox(blockMenu) {
    delAllCheck = []
    $(`input[name=${blockMenu}]:checked`).each(function(index, item) {
        delAllCheck.push(item.value)
    })
    if (delAllCheck.length)
        delAllCheckbox(delAllCheck)
}

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