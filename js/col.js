function loadCol(className) {
    $('#colList').empty()
    $('#searchColList').empty()
    $('#paginationList').empty();
    if (className != '請選擇') {
        $.ajax({
            url: './db/details.php',
            data: {
                class: className,
                tableName: 'columnname',
                page: page,
                showPageCount: showPageCount                
            },
            method: 'POST',
            dataType: 'JSON',
            success(data) {
              for (let i = 1; i <= data[0]; i++)
                  $(`#paginationList`).append(new Option(i, i));
              $('#paginationList').val(page);
              $('#searchColList').append(new Option(`請選擇`, `請選擇`))
              data[1].forEach((colInfo, index) => {
                $('#colList').append(`<tr align="center">
                    <td>
                      <input type="checkbox" name="col" value="${colInfo['type']}">
                    </td>
                    <td id="col${index}">${colInfo['type']}</td>
                    <td>${colInfo['typeName']}</td>
                    <td>
                        ${column(index, colInfo)}
                    </td>
                  </tr>`)
                $('#searchColList').append(new Option(`${colInfo['typeName']}`, `${colInfo['type']}`))
              })
            },
            error() {
              $('#colList').append('<tr><td colspan="4">查無資料！</td></tr>')
              $('#searchColList').append(new Option('查無資料', '查無資料'))
            }
        })
    }
    else {
        $('#colList').append('<tr><td colspan="4">尚未選擇班級</td></tr>')
        $('#searchColList').append(new Option('尚未選擇班級', '尚未選擇班級'))
    }
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
                <input type=text id="colName${index}" value="${colInfo['typeName']}">
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id="updateCol${index}" data-bs-dismiss="modal" onclick="updateCol(${index},'${colInfo['type']}')">UPDATE</button>
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

