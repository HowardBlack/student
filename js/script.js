$('#class').change((e) => {
    $('#sList').empty()
    const value = e.target.value
    if (value != '請選擇')
    {
        $.ajax({
            url: './db/loadClass.php',
            data: {class: value},
            type: 'POST',
            dataType: 'JSON',
            success(result) {
              result.forEach((studenInfo, index) => {
                $('#sList').append(`<tr align=center>
                    <td>${studenInfo[0]}</td>
                    <td>${studenInfo[1]}</td>
                    <td>${studentDialog(value, index, studenInfo)}</td>
                  </tr>`)
              })
            },
            error() {
              $('#sList').append('<tr><td colspan=3>尚未建立班級資料庫</td></tr>')      
            }
        })
    }
    else
        $('#sList').append('<tr><td colspan=3>尚未選擇班級</td></tr>')
})

function studentDialog(className, index, sInfo) {
  return `<!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#show${index}">
  查看資料
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="show${index}" tabindex="-1" aria-labelledby="lab${index}" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="lab${index}">${sInfo[1]} 同學</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ${optionDropDown(className, index)}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" id=btnSubmit${index} onclick=upload(${index})>Save changes</button>
        </div>
      </div>
    </div>
  </div>`
}

// 資料庫訪問率太高 => 每次都需要訪問，降低效能
function optionDropDown(className, index) {
   $.ajax({
    url: './db/loadColumn.php',
    data: {class: className},
    type: 'POST',
    dataType: 'JSON',
    success(result) {
      result.forEach((option) => {
        $(`#columnName${index}`).append(`<tr>
              <td>${option[1]}</td>
              <td>${detailsOpt(className, option[0], index)}</td>
            </tr>`)
      })
    },
    error() {
      $('#columnName').append('<tr><td colspan=2>尚未建立欄位項目！</td></tr>')
    }
  })
  
  return `
    <table class="table">
      <thead>
        <tr>
          <td>欄位</td>
          <td>詳細資料</td>
        </tr>
      </thead>
      <tbody id="columnName${index}"></toby>
    </table>
  `
}

// 資料庫訪問率太高 => 每次都需要訪問，降低效能
function detailsOpt(className, columnCode, index) {
  $.ajax({
    url: './db/loadItems.php',
    data: {class: className, code: columnCode},
    type: 'POST',
    dataType: 'JSON',
    success(result) {
      $(`#${columnCode}${index}`).append(`<option value=請選擇}>請選擇</option>`)
      result.forEach((optDetails) => {
        $(`#${columnCode}${index}`).append(`<option value=${optDetails[2]}>${optDetails[2]}</option>`)
      })
    },
    error() {
      $(`#${columnCode}${index}`).append('<option value=暫無選項>暫無選項</option>')
    }
  })

  return `
    <select id=${columnCode}${index}></select>
    <textarea id=ta${columnCode}${index} style=resize: both; cols=10 rows=1></textarea>
  `
}

function upload(index) {
  console.log(index)
}