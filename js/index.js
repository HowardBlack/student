let columns = []
let dtName = "studentinfo"
let className = "請選擇"
let block = 'info'
let blockMenu = 'info'


// open web page init
$(() => {
    columns = []
    className = $('#class').val()
    createClass()
    refreshClassName()
    // refresh(className)
})

$('#class').change((e) => {
    columns = []
    className = e.target.value
    clear()
    // refresh(className)
    page = 1
    showPageCount = 10
    loadName(className)
    defaultAddType(className)
    loadSearchName(className)
    loadSearchCol(className)
})

function clear() {
    $('#searchItemList').empty()
    $('#searchItemList').append(new Option('請選擇欄位項目', '請選擇欄位項目'))
}

function refresh(className) {
    clear()
    validDB(className)
    loadClass(className)
    loadInfo(className)
    loadCol(className)
    loadItems(className)
    loadLevel(className)
    loadAllRecord(className)
    defaultAddType(className)
}

function validDB(className) {
    if (valid_dbName(className)) {
        $.ajax({
            url: './db/db.php',
            method: 'POST',
            data: {class: className},
            success(bool) {
                // allClassDB()
                if (bool) alert('自動新建資料庫&資料表成功')
            },
            error() {
                alert('無法連接或資料表已存在');
            }
        })
    }
}

function valid_dbName(className) {
    return (className != '請選擇') ? true : false
}

function loadSearchName(classname)
{
    $('#nameList').empty()
    if (valid_dbName(className))
    {
        $.ajax({
            url: './db/detailsTwo.php',
            data: {
                class: className,
                tableName: 'studentinfo',
            },
            method: 'POST',
            dataType: 'JSON',
            success(result) {
                $('#nameList').append(new Option('請選擇', '請選擇'))
                result.forEach((studenInfo, index) => {
                    const name = studenInfo['name']                    
                    $('#nameList').append(new Option(`${name}`, `${name}`))
                })
            },
            error() {
                $('#nameList').append(new Option('查無資料', '查無資料'))
            }
        })
    }
    else
    {
        $('#nameList').append(new Option('尚未選擇班級', '尚未選擇班級'))
    }
}

function loadSearchCol(classname)
{
    $('#searchColList').empty()
    if (valid_dbName(className))
    {
        $.ajax({
            url: './db/detailsTwo.php',
            data: {
                class: className,
                tableName: 'columnname',
            },
            method: 'POST',
            dataType: 'JSON',
            success(result) {
                $('#searchColList').append(new Option(`請選擇`, `請選擇`))
                result.forEach((colInfo, index) => {
                    $('#searchColList').append(new Option(`${colInfo['typeName']}`, `${colInfo['type']}`))
                })
            },
            error() {
                $('#searchColList').append(new Option('查無資料', '查無資料'))
            }
        })
    }
    else
    {
        $('#searchColList').append(new Option('尚未選擇班級', '尚未選擇班級'))
    }
}