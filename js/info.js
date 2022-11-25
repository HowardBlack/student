function loadInfo(className) {
    $('#infoList').empty()
    if (className != '請選擇') {
        $.ajax({
            url: './db/loadClass.php',
            data: {class: className},
            method: 'POST',
            dataType: 'JSON',
            success(result) {
              result.forEach((studenInfo, index) => {
                $('#infoList').append(`<tr align=center>
                    <td id=sidInfo${index}>${studenInfo[0]}</td>
                    <td>${studenInfo[1]}</td>
                    <td>
                        ${info(index, studenInfo)}
                        <button class='btn btn-danger' onclick=delInfo('${studenInfo[0]}')>刪除</button>
                    </td>
                  </tr>`)
              })
            },
            error() {
              $('#infoList').append('<tr><td colspan=3>查無資料！</td></tr>')      
            }
        })
    }
    else
        $('#infoList').append('<tr><td colspan=3>尚未選擇班級</td></tr>')
}

function info(index, sInfo) {
    return `<!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#info${index}">
    修改資料
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="info${index}" tabindex="-1" aria-labelledby="info${index}" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${sInfo[1]} 同學</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>
                <span>姓名</span>
                <input type=text id=sName${index} value=${sInfo[1]}>
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id=updateInfo${index} data-bs-dismiss="modal" onclick=updateInfo(${index},'${sInfo[0]}')>UPDATE</button>
          </div>
        </div>
      </div>
    </div>`
}

function updateInfo(index, sid) {
    $.ajax({
        url: './db/info/update.php',
        method: 'POST',
        data: {class: className, data: [sid, $(`#sName${index}`).val()]},
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

function delInfo(sid) {
    const status = confirm('確定刪除嗎?')
    if (status) {
        $.ajax({
            url: './db/info/del.php',
            method: 'POST',
            data: {class: className, sid: sid},
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
