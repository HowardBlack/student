$('#class').change((e) => {
    $('#sList').empty()
    const value = e.target.value
    if (value != '請選擇')
    {
        $.ajax({
            url: './db/loadData.php',
            data: {class: value},
            type: 'POST',
            dataType: 'json',
            success: (result) => {
                // console.log(result)
                Object.values(result).forEach((v) => {
                    $('#sList').append(
                        '<tr>' +
                        `<td>${v[1]}</td>` +
                        `<td>${v[2]}</td>` +
                        `<td>
                        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
查看資料
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">${v[2]} 同學</h5>
        <button type="button" c lass="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
      </div>
      <div class="modal-body">
        使用者自定義內容
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
                        </td>` +
                        '</tr>'
                    )
                })
            },
        })
    }
    else
        $('#sList').append('<tr><td colspan=3>尚未選擇班級</td></tr>')
})


function studentDialog()
{

}