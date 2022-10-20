$('#class').change((e) => {
    $('#sList').empty()
    const className = e.target.value
    if (className != '請選擇') {
        $.ajax({
            url: './db/loadClass.php',
            data: {class: className},
            type: 'POST',
            dataType: 'JSON',
            success(result) {
              result.forEach((studenInfo, index) => {
                $('#sList').append(`<tr align=center>
                    <td id=sid${index}>${studenInfo[0]}</td>
                    <td>${studenInfo[1]}</td>
                    <td>${studentDialog(className, index, studenInfo)}</td>
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
          <button type="button" class="btn btn-primary" id=btnSubmit${index} onclick=upload('${className}',${index})>Save changes</button>
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
  const optId = `${columnCode}${index}`
  $.ajax({
    url: './db/loadItems.php',
    data: {class: className, code: columnCode},
    type: 'POST',

    dataType: 'JSON',
    success(result) {
      $(`#${optId}`).append(`<option value=請選擇>請選擇</option>`)
      result.forEach((optDetails) => {
        $(`#${optId}`).append(`<option value=${optDetails[2]}>${optDetails[2]}</option>`)
      })
    },
    error() {
      $(`#${optId}`).append('<option value=暫無選項>暫無選項</option>')
    }
  })

  return `
    <select id=${optId} onchange=optionEvent('${className}','${columnCode}','${index}')></select>
    <textarea id=ta${optId} oninput=textareaInput('${className}','${columnCode}','${index}') style=resize: both; cols=10 rows=1 disabled></textarea>
  `
}

/* sid, type, item, recordTime ==> 辨別資料是否已存在資料庫

*/
function optionEvent(className, type, index) {
  const sid = $(`#sid${index}`).text()
  const itemValue = $(`#${type}${index}`).val()
  const month = $('#month').val()

  if (itemValue != '請選擇') {
    $(`#ta${type}${index}`).prop('disabled', false)
    $.ajax({
      url: './db/queryItems.php',
      data: {class: className, sid: sid, type: type, item: itemValue, month: month},
      type: 'POST',
      dataType: 'JSON',
      success(result) {

      },
      error() {
  
      }, 
    })
  }
  else {
    $(`#ta${type}${index}`).prop('disabled', true)
  }
  
}

function textareaInput(className, type, index) {
  const sid = $(`#sid${index}`).text()
  const itemValue = $(`#${type}${index}`).val()
  console.log(className)
  console.log(sid)
  console.log(type)
  console.log(itemValue)
}

/* 上傳資料庫

*/
function upload(index) {
  // 如何確認欄列個數？

}