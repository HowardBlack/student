$('#class').change((e) => {
    $('#sList').empty()
    const value = e.target.value
    if (value != '請選擇')
    {
        $.ajax({
            url: './db/loadData.php',
            data: {class: value},
            type: 'POST',
            dataType: 'JSON',
            success: (result) => {
                Object.values(result).forEach((v) => {                  
                    $('#sList').append(
                        '<tr>' +
                        `<td>${v[0]}</td>` +
                        `<td>${v[1]}</td>` +
                        `<td>${studentDialog(v[1])}</td>` +
                        '</tr>'
                    )
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
  查看學生資料
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
  return "function test"
}