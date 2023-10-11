function loadClassName() {
    $('#clasList').empty();
    $('#paginationList').empty();
    $.ajax({
        url: './db/class/loadClassName.php',
        method: 'POST',
        data: {page: page, showPageCount: showPageCount},
        dataType: 'JSON',
        success(data) {
            // 加入分頁下拉選單
            for (let i = 1; i <= data[0]; i++)
                  $(`#paginationList`).append(new Option(i, i));
            // 設定目前的頁數
            $('#paginationList').val(page);
            if (data[1].length) { // 如果有資料逐筆新增至 clasList
                for (let row of data[1]) {
                    const id = row['id']
                    const showclassname = row['showclassname']
                    const classname = row['classname']
                    const createTime = row['lastRecordTime']
                    const keepTime = row['keepTime']
                    $('#clasList').append(`
                        <tr align=center>
                            <td class="col-2">
                                <input type="checkbox" name="clas" value="'${classname}'">
                            </td>
                            <td class="col-1">${id}</td>
                            <td class="col-1">${showclassname}</td>
                            <td class="col-2">${createTime}</td>
                            <td class="col-2">${keepTime}</td>
                            <td class="col-1">
                                ${defaultPermission(row)}
                            </td>
                        </tr>
                    `)
                }
                // 判斷先前的班級選項是否存在，若存在則預設那個值，不存在則預設第一個選項值，並更新 className
                try {
                    $("#class").val(className);
                }
                catch (err) {
                    $("#class").val("請選擇");
                }
            }else { // 查無資料
                $('#clasList').append(`<tr><td colspan="6">班級查無資料！</td></tr>`)
                $('#class').empty()
                $('#class').append(new Option('請選擇', '請選擇'))
            }
        },
        error() {
            $('#clasList').append(`<tr><td colspan="6">班級查無資料！</td></tr>`)
            $('#class').empty()
            $('#class').append(new Option('請選擇', '請選擇'))
        }
    })
}

//<summary>
//判斷班級是否啟用
//</summary>
//<param name="data">每筆班級資訊</param>
//<return>未啟用及啟用的按鈕</return>
function defaultPermission(data) {
    const id = data['id']
    const showclassname = data['showclassname']
    const permission = data['permission']
    const dbName = data['classname']
    let css, showText, showValue = '';
    if (permission == '0') { //未啟用的班級
        css = 'btn btn-outline-success';
        showText = '啟用';
        showValue = 'f';
    }
    else { //已啟用的班級
        css = 'btn btn-outline-danger';
        showText = '停用';
        showValue = 't';
    }
    return `<button class="${css}" id="enable${id}" value="${showValue}" onclick="addClassdb(${id}, '${showclassname}', '${permission}', '${dbName}')">${showText}</button>`
}

//<summary>
//點擊班級管理的啟用or停用按鈕事件
//</summary>
//<param index="0" name="id">編號</param>
//<param index="1" name="showclassname">班級名稱</param>
//<param index="2" name="permission">權限( 0 or 1 )</param>
//<param index="3" name="dbName">資料庫名稱</param>
function addClassdb(...args) {
    /*
        1. 啟用 => 新增班級, 按鈕為紅色, 文字變停用, permission = 1；停用 => 刪除班級, 按鈕為綠色, 文字變啟用, permission = 0
        2. 更新資料庫 permission value
    */
    const element  = document.getElementById(`enable${args[0]}`)
    const dbName = args[3]
    let text = element.value
    let css = ''
    
    if (text == 'f') {
        $('#class').append(`<option id="${dbName}" value="${dbName}">${args[1]}</option>`)
        text = 't'
        css = 'btn btn-outline-danger'
        element.innerText = '停用'
    }
    else {
        $(`#${dbName}`).remove()
        text = 'f'
        css = 'btn btn-outline-success'
        element.innerText = '啟用'
        // refresh(className='請選擇')
    }
    element.value = text
    element.className = css

    $.ajax({
        url: './db/class/update.php',
        method: 'POST',
        data: {id: args[0], showclassname: args[1], status: text},
        success(bool) {
            (bool) ? loadClassName() : console.log(0)
        },
        error() {
            alert('無法連接')
        }
    })

}

//<summary>
//於頁面初始化及班級管理資訊變更時，更新班級下拉選單
//</summary>
function resetClassOption() {
    $('#class').empty();
    $('#class').append(new Option('請選擇', '請選擇'));
    $('#class').val('請選擇');
    $.post("./db/class/resetClassOption.php", {dataTable: 'classmanage'}, (resultData, status) => {
        if (status === 'success') {
            if (resultData.length) {
                resultData.forEach((rowClass) => {
                    let showclassname = rowClass['showclassname'];
                    let dbName = rowClass['classname'];
                    $('#class').append(`<option id="${dbName}" value="${dbName}">${showclassname}</option>`);
                })
            };
        };
    }, 'json')
        .fail((error) => {
            alert('目前無啟用班級或無班級資料');
        });
}