$('#upload_file').click(function(event) {
    console.log($('#userFile'))
    // regex
    const regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/
    const userFile = $('#userFile')

    // valid file name and subtitle
    if (regex.test(userFile.val().toLowerCase())) {
        // file not unefined
        if (typeof(userFile) !== 'undefined') {
            let reader = new FileReader()

            reader.onload = (event) => {
                // ajax php upload file data
                console.log(event.target.result.split('\n'))
            }

            reader.readAsText(userFile[0].files[0])
        }else
            alert('尚無資料上傳！')
    }else
        alert('檔案錯誤或副檔名錯誤(only support csv file)！')


    // onload file data

    // read data

});