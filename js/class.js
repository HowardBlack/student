function refreshClassName() {
    loadClassName()
}

function loadClassName() {
    $('#class').empty()
    $('#class').append(new Option('請選擇', '請選擇'))
    $('#clasList').empty()
    $.ajax({
        url: './db/class/loadClassName.php',
        method: 'POST',
        dataType: 'JSON',
        success(data) { 
            if (data.length) {
                for (let row of data) {
                    const id = row[0]
                    const showclassname = row[1]
                    const permission = row[2]
                    const dbName = row[3]
                    const createTime = row[4]
                    const keepTime = row[5]
                    $('#clasList').append(`
                        <tr align=center>
                            <td class="col-2">
                                <input type="checkbox" name="clas" value="${id}">
                            </td>
                            <td class="col-1">${id}</td>
                            <td class="col-1">${showclassname}</td>
                            <td class="col-2">${dbName}</td>
                            <td class="col-2">${createTime}</td>
                            <td class="col-2">${keepTime}</td>
                            <td class="col-1">
                                ${defaultPermission(row)}
                            </td>
                        </tr>
                    `)
                }
            }else {
                $('#clasList').append(`<tr><td colspan="7">班級查無資料！</td></tr>`)
                $('#class').empty()
                $('#class').append(new Option('請選擇', '請選擇'))
            }
        },
        error() {
            $('#clasList').append(`<tr><td colspan="7">班級查無資料！</td></tr>`)
            $('#class').empty()
            $('#class').append(new Option('請選擇', '請選擇'))
        }
    })
}

function createClass() {
    $.ajax({
        url: './db/class/createClass.php',
        method: 'POST',
        success(bool) {
            if (bool) alert('班級管理資料庫建立成功')
        },
        error() {
            alert('無法連接')
        }
    })
}

// 驗證顯示權限
function defaultPermission(data) {
    const id = data[0]
    const showclassname = data[1]
    const permission = data[2]
    const dbName = data[3]
    let css = ""
    if (permission == '0')
        // css = 'btn btn-outline-success'
        return `<button class="btn btn-outline-success" id="enable${id}" value="f" onclick="addClassdb(${id}, '${showclassname}', '${permission}', '${dbName}')">啟用</button>`
    else {
        // css = 'btn btn-outline-danger'
        $('#class').append(`<option id="${dbName}" value="${dbName}">${showclassname}</option>`)
    }
    return `<button class="btn btn-outline-danger" id="enable${id}" value="t" onclick="addClassdb(${id}, '${showclassname}', '${permission}', '${dbName}')">停用</button>`
}

// 判斷可顯示及不可顯示的內容
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
        refresh(className='請選擇')
    }
    element.value = text
    element.className = css

    $.ajax({
        url: './db/class/update.php',
        method: 'POST',
        data: {id: args[0], showclassname: args[1], status: text},
        success(bool) {
            (bool) ? console.log(1) : console.log(0)
        },
        error() {
            alert('無法連接')
        }
    })

    // refreshClassName()
}

