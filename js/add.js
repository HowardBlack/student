function defaultAddType(className) {
    $('select[name=defaultType]').each(function(index, item) {
        fetchColumnValue(item);
    })
}

// <summary>
// 新增資料 / 欄位細項 更新
// </summary>
function fetchColumnValue(item) {
    item.innerHTML = ""
    $.ajax({
        url: './db/detailsTwo.php',
        method: 'POST',
        dataType: 'JSON',
        data: {class: className, tableName: 'columnname'},
        success(data) {
            if (data.length)
                for (let row of data)
                    item.append(new Option(row['typeName'], row['type']))
            else
                item.append(new Option('尚無資料', '尚無資料'))
        },
        error() {
            item.append(new Option('檢查班級是否選擇或資料未新增', '檢查班級是否選擇或資料未新增'))
        }
    })
    // loadSearchData(className, 'columnname', item);
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

function addclas() {
    dtName = 'classmanage'
    if (valid_data_dt('addClassName')) {
        addDT({
            'dataTable': dtName,
            'data': addDataArray
        })

        init('addClassName')
    }else
        alert('請填寫完整資料')
}

function addDT({dataTable, data}) {
    $.ajax({
        url: `./db/class/insert.php`,
        method: 'POST',
        data: {
            datatable: dataTable,
            data: data
        },
        success(bool) {
            if (bool) {
                refreshClassName()
                setTimeout(() => {
                  alert('新增成功')
                }, 0.5)
            }else
                alert('新增失敗')
        },
        error() {
            alert('無法連接')
        }
    })
}

function valid_data_dt(one) {
    addDataArray = []
    const addclassname = document.getElementsByName(one)
    for (let item of addclassname) {
        const value = item.value
        const code = randomCode(8)
        console.log(code)
        if (value != '')
            addDataArray.push([value, code])
        else
            return false
    }
    return (addDataArray.length) ? true : false
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
    return (addDataArray.length) ? true : false
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
                // refresh(className)
                defaultAddType(className)
                loadClass(className); // 更新的位置是班級管理，其實不需要使用這寫法，但目前無想法...為了解決下拉頁數重複問題(暫時)
                setTimeout(() => {
                    alert('新增成功');
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
    for (let arg of args) {
        let all = document.getElementsByName(arg)
        for (let each of all) {
            each.value = ""
        }
    }
}

function randomCode(length) {
    if (length > 0) {
       let data = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
       let nums = "";
       for (let i = 0; i < length; i++) {
          let r = parseInt(Math.random() * 26);
          nums += data[r];
       }
       return nums;
    } else {
       return false;
    }
 }