async function loadLevel(className) {
    $('#levelList').empty()
    if (className != '請選擇') {
        $.ajax({
            url: './db/details.php',
            data: {class: className, tableName: 'itemlevel'},
            method: 'POST',
            dataType: 'JSON',
            success(data) {
              data.forEach((levelInfo, index) => {
                $('#levelList').append(`<tr align=center>
                    <td>
                      <input type=checkbox name=level value="${levelInfo[0]}">
                    </td>
                    <td id="lev${index}">${levelInfo[0]}</td>
                    <td>${levelInfo[1]}</td>
                    <td>
                        ${level(index, levelInfo)}
                    </td>
                  </tr>`)
              })
            },
            error() {
              $('#levelList').append('<tr><td colspan=4>查無資料！</td></tr>')      
            }
        })
    }
    else
        $('#levelList').append('<tr><td colspan=4>尚未選擇班級</td></tr>')
} 

function level(index, levelInfo) {
    return `<!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#level${index}">
    修改資料
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="level${index}" tabindex="-1" aria-labelledby="level${index}" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>
                <span>程度名稱</span>
                <input type=text id="l${index}" value="${levelInfo[1]}">
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id="updateLevel${index}" data-bs-dismiss="modal" onclick="updateLevel('${index}','${levelInfo[0]}')">UPDATE</button>
          </div>
        </div>
      </div>
    </div>`
}

function updateLevel(index, type) {
    $.ajax({
        url: './db/level/update.php',
        method: 'POST',
        data: {class: className, data: [type, $(`#l${index}`).val()]},
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
