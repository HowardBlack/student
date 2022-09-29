$('#class').change((e) => {
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
                        '</tr>'
                    )
                })
            },
        })
    }
})