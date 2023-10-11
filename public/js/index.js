let columns = []
let dtName = "studentinfo"
let className = "請選擇"
let block = 'info'
let blockMenu = 'info'
let searchData = 'none'
let checkMonth = []
let searchCol = 'none'
let searchItem = 'none'

// 網頁閇啟預先執行
$(() => {
    columns = [];
    className = $('#class').val();
    // loadClassName()
    resetClassOption();
})

// <summary>
// 班級下拉選單改變後事件
// </summary>
$('#class').change((e) => {
    columns = [];
    className = e.target.value;
    initAllRecordCondition(className);
    loadName(className); // 重新載入當前選項的清單項目
    defaultAddType(className);
})

// <summary>
// 初始化 學生紀錄查詢 所有搜尋條件
// </summary>
function initAllRecordCondition(className) {
    searchData = 'none';
    checkMonth = [];
    searchCol = 'none';
    searchItem = 'none';
    page = 1;
    showPageCount = 10;
    $('#searchItemList').empty();
    $('#searchItemList').append(new Option('請選擇欄位項目', '請選擇欄位項目'));
    $("input[name='chBox']").each((_index, item) => { item.checked = false; });
    $("#nameList option").first().prop('selected', true);
    $("#searchColList option").first().prop('selected', true);
    $("#searchItemList option").first().prop('selected', true);
    $("input[name='limit']").first().prop('checked', true);
}

function refresh(className) {
    initAllRecordCondition(className)
    // validDB(className)
    loadClass(className)
    loadInfo(className)
    loadCol(className)
    loadItems(className)
    loadLevel(className)
    loadAllRecord(className)
    defaultAddType(className)
    // 更改成 callback function -> className
}

// <summary>
// 驗證是否有選擇班級
// </summary>
function valid_dbName(className) {
    return (className != '請選擇');
}

//<summary> 
//學生記錄查詢之搜尋功能
//載入 班級學生下拉名單、班級欄位項目下拉名稱
//</summary>
//<param name="className">班級</param>
//<param name="dataTable">資料表</param>
//<param name="idElement">下拉元素ID</param>
//<param name="storeLocation">儲存參數位置</param>
//<param name="optionTextCol">文字對應欄位</param>
//<param name="optionValueCol">值對應欄位</param>
function loadSearchData(className, dataTable, idElement, storeLocation, optionTextCol, optionValueCol) {
    $(`#${idElement}`).empty();
    if (valid_dbName(className)) {
        let sendData = {class: className, tableName: dataTable};
        $.post('./db/detailsTwo.php', sendData, (resusltData, status) => {
            if (status === 'success') { // 抓取成功
                if (resusltData.length) { // 且有資料
                    $(`#${idElement}`).append(new Option(`請選擇`, `請選擇`));
                    resusltData.forEach((row, index) => { // 讀取資料並寫入下拉選單
                        const optionText = row[optionTextCol];
                        const optionValue = row[optionValueCol];
                        $(`#${idElement}`).append(new Option(optionText, optionValue));
                    });
                    // 判斷是否有選取過 姓名及欄位，給定預設值，避免重新刷新後，清空下拉資料預設變成 "請選擇"
                    $(`#${idElement}`).val(((storeLocation != 'none') ? storeLocation : '請選擇'));
                };
            };
        }, 'json')
            .fail(() => { // 請求失敗
                $(`#${idElement}`).append(new Option('查無資料，請確認', '查無資料，請確認'));
            });
    } else
        $(`#${idElement}`).append(new Option('尚未選擇班級', '尚未選擇班級'));
}