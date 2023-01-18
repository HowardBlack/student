async function loadClass(className) {
  $('#sList').empty()  
  if (valid_dbName(className)) {
    $.ajax({
        url: './db/loadClass.php',
        data: {class: className},
        method: 'POST',
        dataType: 'JSON',
        success(result) {
          result.forEach((studenInfo, index) => {
            const sid = studenInfo['sid']
            const name = studenInfo['name']
            $('#sList').append(`<tr align="center">
                <td id="sid${index}">${sid}</td>
                <td>${name}</td>                
                ${studentFile(index, studenInfo)}
                <td>${studentDialog(index, studenInfo)}</td>
              </tr>`)
          })
        },
        error() {
          $('#sList').append('<tr><td colspan="4">查無資料！</td></tr>')      
        }
    })
}
else
    $('#sList').append('<tr><td colspan="4">尚未選擇班級</td></tr>')
}

function studentFile(index, sInfo) {
  const sid = sInfo['sid']
  const name = sInfo['name']
  $.ajax({
    url: './db/sfile/showDirFile.php',
    method: 'POST',
    data: {data: sInfo},
    dataType: 'JSON',
    success(dirfile) {
      if (dirfile) {
        dirfile.forEach((value, i) => {
          $(`#showFile${index}`).append(`
            <a href="./data/${sid}_${name}/${value}">${value}</a>
          `)
        })
      }else {
        $(`#showFile${index}`).text = "暫無檔案"
      }
    },
    error() {
      alert('無法連接zxcv')
    }
  })
  return `<td id="showFile${index}"></td>`
}

function studentDialog(index, sInfo) {
  const sid = sInfo['sid']
  const name = sInfo['name']
  return `<!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#show${index}">
  查看資料
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="show${index}" tabindex="-1" aria-labelledby="lab${index}" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="lab${index}">${name} 同學</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          ${optionDropDown(className, index)}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" id="btnSubmit${index}" data-bs-dismiss="modal" onclick="upload('${className}',${index})">Save changes</button>
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
    method: 'POST',
    dataType: 'JSON',
    success(result) {
      result.forEach((option) => {
        $(`#columnName${index}`).append(
          `<tr>
            <td>${option[1]}</td>
            <td>${detailsOpt(className, option[0], index)}</td>
            <td>${detailsLevel(option[0], index)}</td>
          </tr>`
        )
      })
    },
    error() {
      $('#columnName').append('<tr><td colspan="3">尚未建立欄位項目！</td></tr>')
    }
  })
  
  return `
    <table class="table">
      <thead>
        <tr>
          <td>欄位</td>
          <td>詳細資料</td>
          <td>程度</td>
        </tr>
      </thead>
      <tbody id="columnName${index}"></toby>
    </table>
  `
}

$('#month').change(function() {
    let allSelect = document.querySelectorAll('tbody select')
    let allTextArea = document.querySelectorAll('tbody textarea')
    allSelect.forEach(element => {element.selectedIndex = 0})
    allTextArea.forEach(element => {
      element.disabled = true
      element.value = ""
    })
})

// 資料庫訪問率太高 => 每次都需要訪問，降低效能
function detailsOpt(className, columnCode, index) {
  const optId = `${columnCode}${index}`
  $.ajax({
    url: './db/loadItems.php',
    data: {class: className, code: columnCode},
    method: 'POST',
    dataType: 'JSON',
    success(result) {
      columns.push(columnCode)
      columns = [...new Set(columns)]
      $(`#${optId}`).append(`<option value="請選擇">請選擇</option>`)
      result.forEach((optDetails) => {
        $(`#${optId}`).append(`<option value="${optDetails[0]}">${optDetails[2]}</option>`)
      })
    },
    error() {
      $(`#${optId}`).append(`<option value="請選擇">請選擇</option>`)
    }
  })

  return `
    <select id="${optId}" onchange="optionEvent('${className}','${columnCode}','${index}')"></select>
    <textarea id="ta${optId}" style="resize: both;" cols="10" rows="1" disabled></textarea>
  `
}

function detailsLevel(columnCode, index) {
  const levelId = `${columnCode}LevelOpt${index}`
  $.ajax({
    url: './db/details.php',
    data: {class: className, tableName: 'itemlevel'},
    method: 'POST',
    dataType: 'JSON',
    success(data) {
      data.forEach((row) => {
        $(`#${levelId}`).append(new Option(row[1], row[0]))
      })
    },
    error() {
      $(`#${levelId}`).append(`<option value="none">無資料</option>`)
    }
  })
  return `
    <select id="${levelId}" disabled></select>
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
    $(`#${type}LevelOpt${index}`).prop('disabled', false)
    $.ajax({
      url: './db/queryItems.php',
      data: {class: className, sid: sid, type: type, item: itemValue, month: month},
      method: 'POST',
      success(result) {
        try {
          result = JSON.parse(result)
          $(`#ta${type}${index}`).val(result['remark'])
          $(`#${type}LevelOpt${index}`).val(result['typeLevel'])
        }catch (error) {
          $(`#ta${type}${index}`).val('')
          $(`#${type}LevelOpt${index}`).selectedIndex = 0
        }
      },
    })
  }else {
    $(`#ta${type}${index}`).prop('disabled', true)
    $(`#${type}LevelOpt${index}`).prop('disabled', true)
    $(`#ta${type}${index}`).val("")
  }
  
}

/* 上傳資料庫

*/
function upload(className, index) {

  const sid = $(`#sid${index}`).text()
  const month = $('#month').val()
  let record = []

  for(let type of columns) {
    const item = $(`#${type}${index}`).val()
    const itemValue = $(`#ta${type}${index}`).val()
    const itemLevel = $(`#${type}LevelOpt${index}`).prop('value')
    
    if (item != '請選擇' && itemLevel != 'none')
      record.push([sid, type, item, itemLevel, itemValue, month])      
  }

  if (record.length) {
    $.ajax({
      url: './db/upload.php',
      data: {class: className, data: record},
      method: 'POST',
      success() {
        refresh(className)
        setTimeout(() => {
          alert('資料新增/修改成功！')
        }, 0.5)
      },
      error() {
        alert('無法連線或回傳錯誤！')
      },
    })
  }else
    alert('請確認資料是否填寫正確！')

}