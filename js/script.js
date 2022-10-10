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
            success: (result) => {
                Object.values(result).forEach((v) => {
                    $('#sList').append(`
                      <tr align=center>
                        <td>${v[0]}</td>
                        <td>${v[1]}</td>
                        <td>${studentDialog(v[1])}</td>                        
                      </tr>`)
                })
            },
            error: () => {
              $('#sList').append('<tr><td colspan=3>尚未建立班級資料庫</td></tr>')      
            }
        })
    }
    else
        $('#sList').append('<tr><td colspan=3>尚未選擇班級</td></tr>')
})

function studentDialog(name)
{  
  console.log(name)
  return `<!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  查看資料
  </button>
  
  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">${name} 同學</h5>
          <button type="button" c lass="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
        </div>
        <div class="modal-body">
          ${optionDropDown()}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>`
}

function optionDropDown()
{
  // $("#columnName").empty()
   $.ajax({
    url: './db/loadColumn.php',
    data: {class: '資三a'},
    type: 'POST',
    dataType: 'JSON',
    success: (result) => {
        console.log(result.length)
        Object.values(result).forEach((v) => {
           $('#columnName').append(`
              <tr>            
                <td>${v[1]}</td>
                <td>${detailsOpt()}</td>
              </tr>
           `)
        })
    },
    error: () => {
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
    <tbody id="columnName">              
    </toby>
  </table>
  `
}

function detailsOpt()
{
  return `
    <select id=>
      <option value=聆聽並分享想法>聆聽並分享想法</option>
      <option value=重述故事>重述故事</option>
      <option value=說出故事大意/心得>說出故事大意/心得</option>
      <option value=口說表達清楚並語意完整>口說表達清楚並語意完整</option>
    </select>
    <textarea style=resize: both; cols=10 rows=1></textarea>
  `
}