function loadCol(className) {
    $('#colList').empty()
    if (className != '請選擇') {
        $.ajax({
            url: './db/loadColumn.php',
            data: {class: className},
            method: 'POST',
            dataType: 'JSON',
            success(data) {
              data.forEach((colInfo, index) => {
                $('#colList').append(`<tr align=center>
                    <td id=col${index}>${colInfo[0]}</td>
                    <td>${colInfo[1]}</td>
                    <td>
                        ${column(index, colInfo)}
                        <button class='btn btn-danger' onclick=delInfo('${colInfo[0]}')>刪除</button>
                    </td>
                  </tr>`)
              })
            },
            error() {
              $('#colList').append('<tr><td colspan=3>查無資料！</td></tr>')      
            }
        })
    }
    else
        $('#colList').append('<tr><td colspan=3>尚未選擇班級</td></tr>')
}

function column(index, colInfo) {
    return `<!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#column${index}">
    修改資料
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="column${index}" tabindex="-1" aria-labelledby="column${index}" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>
                <span>欄位名稱</span>
                <input type=text id=colName${index} value=${colInfo[1]}>
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id=updateCol${index} data-bs-dismiss="modal" onclick=updateCol(${index},'${colInfo[0]}')>UPDATE</button>
          </div>
        </div>
      </div>
    </div>`
}

function updateCol(index, type) {
    $.ajax({
        url: './db/col/update.php',
        method: 'POST',
        data: {class: className, data: [type, $(`#colName${index}`).val()]},
        success(bool) {
            if (bool) {
                refresh(className)
                setTimeout(() => {
                  alert('更新成功')
                }, 0.5)
            }else
                alert('更新失敗')
        },
        error() {
            alert('無法連接')
        }
    })
}

function delCol(type) {
    const status = confirm('確定刪除嗎?')
    if (status) {
        $.ajax({
            url: './db/col/del.php',
            method: 'POST',
            data: {class: className, type: type},
            success(bool) {
                if (bool) {
                    refresh(className)
                    setTimeout(() => {
                      alert('更新成功')
                    }, 0.5)
                }else
                    alert('刪除失敗')
            },
            error() {
                alert('無法連接')
            }
        })
    }
}