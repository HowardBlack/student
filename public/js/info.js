function loadInfo(className) {
    $('#infoList').empty()    
    $('#paginationList').empty();
    if (valid_dbName(className)) {
        $.ajax({
            url: './db/details.php',
            data: {
                class: className,
                tableName: 'studentinfo',
                page: page,
                showPageCount: showPageCount
            },
            method: 'POST',
            dataType: 'JSON',
            success(result) {
              for (let i = 1; i <= result[0]; i++)
                  $(`#paginationList`).append(new Option(i, i));
              $('#paginationList').val(page);              
              result[1].forEach((studenInfo, index) => {
                const sid = studenInfo['sid']
                const name = studenInfo['name']
                $('#infoList').append(
                  `<tr align="center">
                    <td>
                      <input type="checkbox" name="info" value="${sid}">
                    </td>
                    <td id="sidInfo${index}">${sid}</td>
                    <td id="sOriginName${index}">${name}</td>
                    <td>
                        ${info(index, studenInfo)}
                    </td>
                  </tr>`
                )
                $('#nameList').append(new Option(`${name}`, `${name}`))
              })
            },
            error() {
              $('#infoList').append('<tr><td colspan="4">查無資料！</td></tr>')
              $('#nameList').append(new Option('查無資料', '查無資料'))
            }
        })
    }else {
      $('#infoList').append('<tr><td colspan="4">尚未選擇班級</td></tr>')
      
    }
}

function info(index, sInfo) {
    const classname = sInfo['classname']
    const sid = sInfo['sid']
    const name = sInfo['name']
    return `<!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#info${index}" onclick="allClass('${classname}', '${index}')"">
    修改資料
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="info${index}" tabindex="-1" aria-labelledby="info${index}" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">${name} 同學</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>
                <span>班級</span>
                <select id="sClass${index}"></select>
            </p>
            <p>
                <span>姓名</span>
                <input type="text" id="sName${index}" value="${name}">
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id="updateInfo${index}" data-bs-dismiss="modal" onclick="updateInfo(${index},'${sid}')">UPDATE</button>        
          </div>
        </div>
      </div>
    </div>`
}

function allClass(className, index)
{
  $(`#sClass${index}`).empty();
  $.ajax({
      url: './db/detailsTwo.php',
      method: 'POST',
      dataType: 'JSON',
      data: {class: className, tableName: 'classmanage'},
      success(data) {
          if (data.length) 
              for (let row of data)
                  $(`#sClass${index}`).append(new Option(row['showclassname'], row['classname']));
              $(`#sClass${index}`).val(className);
      },
      error() {}
  })
}

function updateInfo(index, sid) {
    $.ajax({
        url: './db/info/update.php',
        method: 'POST',
        data: {
          class: className,
          data: {
            'sid': sid,
            'originName': $(`#sOriginName${index}`).text(),
            'newName': $(`#sName${index}`).val(),
            'newClassName': $(`#sClass${index}`).val()
          }
        },
        success(bool) {
            if (bool) {
                // refresh(className)
                loadInfo(className);
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