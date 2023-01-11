// async function defaultAddType(className) {

    
//     $('#defaultType').empty()
//     $.ajax({
//         url: './db/loadColumn.php',
//         method: 'POST',
//         dataType: 'JSON',
//         data: {class: className},
//         success(data) {
//             if (data.length) {
//                 for (let row of data) {
//                     const type = row[0]                    
//                     $('#defaultType').append($('<option>',{
//                         value: type,
//                         text: type
//                     }))
//                 }
//             }else {
//                 $('#defaultType').append(new Option('尚無資料', '尚無資料'))
//             }
//         },
//         error() {
//             $('#defaultType').append(new Option('尚無資料', '尚無資料'))
//         }
//     })
// }

async function defaultAddType(className) {
    // const allDefaultType = document.getElementsByName('defaultType');
    // allDefaultType.forEach((item, index) => {
    //     fetchColumnValue(item)
    // })
    $('select[name=defaultType]').each(function(index, item) {
        fetchColumnValue(item)
    })
}

function fetchColumnValue(item) {
    console.log(item)
    item.innerHTML = ""
    $.ajax({
        url: './db/loadColumn.php',
        method: 'POST',
        dataType: 'JSON',
        data: {class: className},
        success(data) {
            if (data.length) {
                for (let row of data) {
                    const type = row[0]
                    item.append(new Option(type, type))
                }
            }else
                item.append(new Option('尚無資料', '尚無資料'))            
        },
        error() {
            item.append(new Option('檢查班級是否選擇或資料未新增', '檢查班級是否選擇或資料未新增'))
        }
    })
}

let addDataArray = []

function addInfo() {
    dtName = 'studentinfo'
    if (valid_dbName(className)) {
        if (valid_data('addSid', 'addName')) {
            addDataTable({
                'className': className,
                'dataTable': dtName,
                'data': addDataArray,
            })
            init('addSid', 'addName')
        }
        else
            alert('請填寫完整資料')
    }else
        alert('請選擇班級！')
}

function addCol() {
    dtName = 'columnname'
    if (valid_dbName(className)) {
        if (valid_data('addType', 'addTypeName')) {
            addDataTable({
                'className': className,
                'dataTable': dtName,
                'data': addDataArray,
            })
            init('addType', 'addTypeName')   
        }
        else
            alert('請填寫完整資料')
    }else
        alert('請選擇班級！')
}

function addItem() {
    dtName = 'columnitems'
    if (valid_dbName(className)) {
        if (valid_data('defaultType', 'addItemName')) {
            addDataTable({
                'className': className,
                'dataTable': dtName,
                'data': addDataArray,
            })
            init('addItemName')
        }
        else
            alert('請填寫完整資料')
    }else
        alert('請選擇班級！')
}

function addLevel() {
    dtName = 'itemlevel'
    if (valid_dbName(className)) {
        if (valid_data('addLevel', 'addItemLevel')) {
            addDataTable({
                'className': className, 
                'dataTable': dtName,
                'data': addDataArray,
            })
            init('addLevel', 'addItemLevel')
        }
        else
            alert('請填寫完整資料')
    }else
        alert('請選擇班級！')
}

function valid_data(one, two) {
    addDataArray = []
    const One = document.getElementsByName(one)
    const Two = document.getElementsByName(two)
    const dataLength = One.length
    
    for (let i = 0; i < dataLength; i++) {
        const oneData = One[i].value
        const twoData = Two[i].value
        if (oneData != '' && twoData != '')
            addDataArray.push([oneData, twoData])
        else
            return false
    }    
    return true
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

function init(...args) {
    // $('#addSid').val('')
    // $('#addName').val('')
    // $('#addType').val('')
    // $('#addTypeName').val('')
    // // $('#defaultType').val('')
    // $('#addItemName').val('')
    // $('#addLevel').val('')
    // $('#addItemLevel').val('')

    for (let arg of args) {
        let all = document.getElementsByName(arg)
        for (let each of all) {
            each.value = ""
        }
    }
}
