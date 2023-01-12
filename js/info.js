async function loadInfo(className) {
    $('#infoList').empty()
    $('#nameList').empty()
    if (valid_dbName(className)) {
        $.ajax({
            url: './db/loadClass.php',
            data: {class: className},
            method: 'POST',
            dataType: 'JSON',
            success(result) {
              $('#nameList').append(new Option(`請選擇`, `請選擇`))
              result.forEach((studenInfo, index) => {
                $('#infoList').append(
                  `<tr align=center>
                    <td>
                      <input type=checkbox name=info value=${studenInfo[0]}>
                    </td>
                    <td id=sidInfo${index}>${studenInfo[0]}</td>
                    <td>${studenInfo[1]}</td>
                    <td>
                        ${info(index, studenInfo)}
                    </td>
                  </tr>`
                )
                $('#nameList').append(new Option(`${studenInfo[1]}`, `${studenInfo[1]}`))
              })
            },
            error() {
              $('#infoList').append('<tr><td colspan=4>查無資料！</td></tr>')
              $('#nameList').append(new Option('查無資料', '查無資料'))
            }
        })
    }else {
      $('#infoList').append('<tr><td colspan=4>尚未選擇班級</td></tr>')
      $('#nameList').append(new Option('尚未選擇班級', '尚未選擇班級'))
    }
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

// function delInfo(sid) {
//     const status = confirm('確定刪除嗎?')
//     if (status) {
//         $.ajax({
//             url: './db/info/del.php',
//             method: 'POST',
//             data: {class: className, sid: sid},
//             success(bool) {
//                 if (bool) {
//                     refresh(className)
//                     setTimeout(() => {
//                       alert('更新成功')
//                     }, 0.5)
//                 }else
//                     alert('刪除失敗')
//             },
//             error() {
//                 alert('無法連接')
//             }
//         })
//     }
// }
