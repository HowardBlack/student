// <summary>
// 學習記錄查詢
// </summary>


// <summary>
// 班級學生下拉選項
// </summary>
$('#nameList').change((e) => {
    initPage()
    const selectValue = e.target.value
    searchData = (selectValue != '請選擇') ? selectValue : 'none'
    loadAllRecord(className)
})

// <summary>
// 欄位項目下拉選項
// </summary>
$('#searchColList').change((e) => {
    initPage()
    const selectValue = e.target.value
    searchCol = (selectValue != '請選擇') ? selectValue : 'none'
    searchItem = 'none'
    seachItems(searchCol)
    loadAllRecord(className)
})

// <summary>
// 欄位細項下拉選項
// </summary>
$('#searchItemList').change((e) => {
    initPage()
    const selectValue = e.target.value
    searchItem = (selectValue != '請選擇') ? selectValue : 'none'
    loadAllRecord(className)
})

// <summary>
// 欄位細項刷新功能
// </summary>
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
                       $('#searchItemList').append(new Option(row['item'], row['id']))
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
        initPage()
        loadAllRecord(className)
    })
})

// <summary>
// 預設載入所有學生記錄；可根據 班級、欄位項目、欄位細項、月份 查詢條件回傳記錄
// </summary>
function loadAllRecord(className) {
    let cMonth = 'none';
    cMonth = (checkMonth.length == 0) ? 'none' : checkMonth;
    $('#queryList').empty()
    $('#paginationList').empty();
    loadSearchData(className, 'studentinfo', 'nameList', searchData, 'name', 'name');
    loadSearchData(className, 'columnname', 'searchColList', searchCol, 'typeName', 'type');
    if (valid_dbName(className)) {
        $.ajax({
            url: './db/record/loadRecord.php',
            method: 'POST',
            dataType: 'JSON',
            data: {
                class: className,
                search: searchData,
                month: cMonth,
                searchCol: searchCol,
                searchItem: searchItem,
                page: page,
                showPageCount: showPageCount
            },
            success(data) {
                for (let i = 1; i <= data[0]; i++)
                    $(`#paginationList`).append(new Option(i, i));
                $('#paginationList').val(page);
                if (data[1].length) {
                    for (let row of data[1]) {
                        const id = row['id'];
                        const sid = row['sid'];
                        const sname = row['name'];
                        const typeName = row['typeName'];
                        const level = row['level'];
                        const item = row['item'];
                        const remark = row['remark'];
                        const recordmonth = row['recordMonth'];
                        const lastRecordTime = row['lastRecordTime'];
                        $('#queryList').append(
                            `<tr align="center">
                                <td>
                                    <input type="checkbox" name="choice" value="${id}">
                                </td>
                                <td>${id}</td>
                                <td>${sid}</td>
                                <td>${sname}</td>
                                <td>${typeName}</td>
                                <td>${item}</td>
                                <td id="tdLevel${id}">${level}</td>
                                <td>${remark}</td>
                                <td>${recordmonth}</td>
                                <td>${lastRecordTime}</td>
                            </tr>`
                        )
                        tdLevelBacColor(id, level)
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

// <summary>
// 區分學生記錄 強與弱 的顏色
// </summary>
function tdLevelBacColor(id, level) {
    if (level == '強')
        $(`#tdLevel${id}`).prop('style', 'background-color: yellow')
    else if (level == '弱')
        $(`#tdLevel${id}`).prop('style', 'background-color: red')
}

function initPage()
{
    page = 1;
}