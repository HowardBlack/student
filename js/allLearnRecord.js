let searchData = 'none'
let checkMonth = []
let searchCol = 'none'
let searchItem = 'none'

$('#nameList').change((e) => {
    const selectValue = e.target.value
    searchData = (selectValue != '請選擇') ? selectValue : 'none'
    loadAllRecord(className, searchData, checkMonth, searchCol, searchItem)
})

$('#searchColList').change((e) => {
    const selectValue = e.target.value
    searchCol = (selectValue != '請選擇') ? selectValue : 'none'
    if (searchCol == 'none') searchItem = 'none'
    seachItems(searchCol)
    loadAllRecord(className, searchData, checkMonth, searchCol, searchItem)
})

$('#searchItemList').change((e) => {
    const selectValue = e.target.value
    searchItem = (selectValue != '請選擇') ? selectValue : 'none'
    loadAllRecord(className, searchData, checkMonth, searchCol, searchItem)
})

function seachItems(searchCol) {
    $('#searchItemList').empty()
    if (searchCol != 'none') {
        $.ajax({
            url: './db/loadItems.php',
            method: 'POST',
            dataType: 'JSON',
            data: {class: className, code: searchCol},
            success(data) {
                if (data.length) {
                    $('#searchItemList').append(new Option('請選擇', '請選擇'))
                    for (let row of data)
                       $('#searchItemList').append(new Option(row[2], row[0]))
                }
                else
                    $('#searchItemList').append(new Option('查無資料', '查無資料'))
            },
            error() {
                $('#searchItemList').append(new Option('查無資料', '查無資料'))
            }
        })
    }
    else
        $('#searchItemList').append(new Option('請選擇欄位項目', '請選擇欄位項目'))
}

const allchBox = document.querySelectorAll('input[type=checkbox]')
allchBox.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            checkMonth.push(e.target.value)
        }else {
            checkMonth.splice(checkMonth.indexOf(e.target.value), 1)
        }
        loadAllRecord(className, searchData, checkMonth, searchCol, searchItem)
    })
})

function loadAllRecord(className, searchData='none', chMonth='none', searchCol='none', searchItem='none') {
    if (chMonth.length == 0) chMonth = 'none'
    $('#queryList').empty()
    if (valid_dbName(className)) {
        $.ajax({
            url: './db/record/loadRecord.php',
            method: 'POST',
            dataType: 'JSON',
            data: {
                class: className,
                search: searchData,
                month: chMonth,
                searchCol: searchCol,
                searchItem: searchItem
            },
            success(data) {
                if (data.length) {
                    for (let row of data) {
                        $('#queryList').append(
                            `<tr align="center">
                                <td>
                                    <input type="checkbox" name="choice" value="${row[0]}">
                                </td>
                                <td>${row[0]}</td>
                                <td>${row[1]}</td>
                                <td>${row[2]}</td>
                                <td>${row[3]}</td>
                                <td id="tdLevel${row[0]}">${row[4]}</td>
                                <td>${row[5]}</td>
                                <td>${row[6]}</td>
                                <td>${row[7]}</td>
                                <td>${row[8]}</td>
                            </tr>`
                        )
                        tdLevelBacColor(row[0], row[4])
                    }
                }else
                    $('#queryList').append(`<tr><td colspan="${row.length + 1}">查無資料！</td></tr>`)
            },
            error() {
                $('#queryList').append(`<tr><td colspan="10">查無資料！</td></tr>`)
            }
        })
    }else {
        $('#queryList').append(`<tr><td colspan="10">尚未選擇班級！</td></tr>`)
    }
}

function tdLevelBacColor(id, level) {
    if (level == '強')
        $(`#tdLevel${id}`).prop('style', 'background-color: yellow')
    else if (level == '弱')
        $(`#tdLevel${id}`).prop('style', 'background-color: red')
}