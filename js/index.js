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
    refresh(className)
})

$('#class').change((e) => {
    columns = []
    className = e.target.value
    clear()
    refresh(className)
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
    loadAllRecord(className, searchData='none', checkMonth, searchCol='none', searchItem='none')
    defaultAddType(className)
}

async function validDB(className) {
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

// function allClassDB() {
//     $('#dbList').empty()
//     $.ajax({
//         url: './db/class/loadClassDB.php',
//         method: 'POST',
//         dataType: 'JSON',
//         success(data) {
//             if (data.length) {
//                 for (let row of data) {
//                     $('#dbList').append(`
//                         <tr align=center>
//                             <td>
//                                 <input type=checkbox name=db value="${row[0]}">
//                             </td>
//                             <td>${row[1]}</td>
//                             <td>${row[2]}</td>
//                         </tr>
//                     `)
//                 }
//             }else {
//                 $('#dbList').append('<tr><td colspan=3>查無資料！</td></tr>')
//             }
//         },
//         error() {
//             $('#dbList').append('<tr><td colspan=3>查無資料！</td></tr>')
//         }
//     })
// }
