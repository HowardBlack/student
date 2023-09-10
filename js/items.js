function loadItems(className) {
    $('#itemsList').empty()
    $('#paginationList').empty();
    if (className != '請選擇') {
        $.ajax({
            url: './db/items/loadItems.php',
            data: {
                class: className,
                page: page,
                showPageCount: showPageCount
            },
            method: 'POST',
            dataType: 'JSON',
            success(data) {
              for (let i = 1; i <= data[0]; i++)
                  $(`#paginationList`).append(new Option(i, i));
              $('#paginationList').val(page);
              data[1].forEach((element) => {
                const index = element['id']
                $('#itemsList').append(`
                  <tr align="center">
                    <td>
                      <input type="checkbox" name="item" value="${index}">
                    </td>
                    <td id="items${index}">${element['typeName']}</td>
                    <td>${element['item']}</td>
                    <td>
                        ${items(index, element)}
                    </td>
                  </tr>`
                )
              });
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
                <input type=text id="itemName${index}" value="${itemInfo['item']}" size="100px">
            </p>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" id="updateItem${index}" data-bs-dismiss="modal" onclick="updateItem(${index},'${itemInfo['type']}')">UPDATE</button>
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
                // refresh(className)
                loadItems(className);
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