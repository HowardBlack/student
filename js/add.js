async function defaultAddType(className) {
    $('#defaultType').empty()
    $.ajax({
        url: './db/loadColumn.php',
        method: 'POST',
        dataType: 'JSON',
        data: {class: className},
        success(data) {
            if (data.length) {
                for (let row of data) {
                    const type = row[0]                    
                    $('#defaultType').append($('<option>',{
                        value: type,
                        text: type
                    }))
                }
            }else {
                $('#defaultType').append(new Option('尚無資料', '尚無資料'))
            }
        },
        error() {
            $('#defaultType').append(new Option('尚無資料', '尚無資料'))
        }
    })
}

function addInfo() {
    if (valid_dbName(className)) {
        const add_sid = $('#addSid').val()
        const add_name = $('#addName').val()
        if (add_sid != "" && add_name != "") {
            dtName = "studentinfo"
            addDataTable({
                'className': className, 
                'dataTable': dtName, 
                'data': [add_sid, add_name],
            })
        }else
            alert('請填寫完整資料')
    }else
        alert('請選擇班級！')
}

function addCol() {
    if (valid_dbName(className)) {
        const add_type = $('#addType').val()
        const add_TypeName = $('#addTypeName').val()
        if (add_type != "" && add_TypeName != "") {
            dtName = "columnname"
            addDataTable({
                'className': className, 
                'dataTable': dtName, 
                'data': [add_type, add_TypeName],
            })
        }else
            alert('請填寫完整資料')
    }else
        alert('請選擇班級！')
}

function addItem() {
    if (valid_dbName(className)) {
        const add_defaultType = $('#defaultType').val()
        const add_addItemName = $('#addItemName').val()
        if (add_defaultType != "尚無資料") {
            if (add_addItemName != '') {
                dtName = "columnitems"
                addDataTable({
                    'className': className, 
                    'dataTable': dtName, 
                    'data': [add_defaultType, add_addItemName],
                })
            }else
                alert('請填寫完整資料')
        }else
            alert('請選擇代號！')
    }else
        alert('請選擇班級！')
}

function addLevel() {
    if (valid_dbName(className)) {
        const add_typeLevel = $('#addLevel').val()
        const add_itemLevel = $('#addItemLevel').val()
        if (add_typeLevel != "" && add_itemLevel != "") {
            dtName = "itemlevel"
            addDataTable({
                'className': className, 
                'dataTable': dtName, 
                'data': [add_typeLevel, add_itemLevel],
            })
        }else
            alert('請填寫完整資料')
    }else
        alert('請選擇班級！')
}

function addDataTable({className, dataTable, data}) {
    $.ajax({
        url: `./db/add/insert.php`,
        method: 'POST',
        data: {
            class: className,
            datatable: dataTable,
            data: data
        },
        success(bool) {
            if (bool) {
                refresh(className)
                init()
                setTimeout(() => {
                  alert('新增成功')
                }, 0.5)
            }else
                alert('新增失敗！請檢查資料是否重複或資料表不存在')
        },
        error() {
            alert('無法連接')
        }
    })
}

function init() {
    $('#addSid').val('')
    $('#addName').val('')
    $('#addType').val('')
    $('#addTypeName').val('')
    // $('#defaultType').val('')
    $('#addItemName').val('')
    $('#addLevel').val('')
    $('#addItemLevel').val('')
}