let columns = []
let dtName = "studentinfo"
let className = "請選擇"
let block = 'info'
let blockMenu = 'info'
let searchData = 'none'
let checkMonth = []
let searchCol = 'none'
let searchItem = 'none'

// open web page init
$(() => {
    columns = []
    className = $('#class').val()
    createClass()
    refreshClassName()
})

$('#class').change((e) => {
    columns = [];
    className = e.target.value;
    initAllRecordCondition(className);
    loadName(className);
    defaultAddType(className);
    loadSearchName(className);
    loadSearchCol(className);
})

function initAllRecordCondition(className) {
    searchData = 'none';
    checkMonth = [];
    searchCol = 'none';
    searchItem = 'none';
    page = 1;
    showPageCount = 10;
    $('#searchItemList').empty();
    $('#searchItemList').append(new Option('請選擇欄位項目', '請選擇欄位項目'));
    $("input[name='chBox']").each((_index, item) => {item.checked = false; });
    $("#nameList option").first().prop('selected', true);
    $("#searchColList option").first().prop('selected', true);
    $("#searchItemList option").first().prop('selected', true);
}

function refresh(className) {
    initAllRecordCondition(className)
    validDB(className)
    loadClass(className)
    loadInfo(className)
    loadCol(className)
    loadItems(className)
    loadLevel(className)
    loadAllRecord(className)
    defaultAddType(className)
    // 更改成 callback function -> className
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