function loadItems(className) {
    $('#itemsList').empty()
    if (className != '請選擇') {
        $.ajax({
            url: './db/items/loadItems.php',
            data: {class: className},
            method: 'POST',
            dataType: 'JSON',
            success(data) {
              for (let item of data) {
                const index = item[0]
                $('#itemsList').append(`<tr align="center">
                    <td>
                      <input type="checkbox" name="item" value="${item[0]}">
                    </td>
                    <td id="items${index}">${item[1]}</td>
                    <td>${item[2]}</td>
                    <td>
                        ${items(index, item)}
                    </td>
                  </tr>`)
              }
            },
            error() {
              $('#itemsList').append('<tr><td colspan="4">查無資料！</td></tr>')      
            }
        })
    }
    else
        $('#itemsList').append('<tr><td colspan="4">尚未選擇班級</td></tr>')
}

function items(index, itemInfo) {
    return `<!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#item${index}">
    修改資料
    </button>
    
    <!-- Modal -->
    <div class="modal fade" id="item${index}" tabindex="-1" aria-labelledby="item${index}" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <p>
                <span>項目名稱</span>
                <input type=text id="itemName${index}" value="${itemInfo[2]}" size="100px">
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id="updateItem${index}" data-bs-dismiss="modal" onclick="updateItem(${index},'${itemInfo[0]}')">UPDATE</button>
          </div>
        </div>
      </div>
    </div>`
}

function updateItem(index, type) {
    $.ajax({
        url: './db/items/update.php',
        method: 'POST',
        data: {class: className, data: [index, $(`#itemName${index}`).val()]},
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