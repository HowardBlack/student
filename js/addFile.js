$(`#upload_file`).click(function(event) {
    const userFile = $('#userFile')
    let formData = new FormData()
    for(let i = 0; i < userFile[0].files.length; i++)
        formData.append('file[]', userFile[0].files[i])
    $.ajax({
        url: './db/sfile/uploadExcel.php',
        method: 'POST',
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        success(bool) {
            (bool) ? addClassDB() : alert('檔案上傳失敗！')
        },
        error() {}
    })
})

function addClassDB()
{
    $.ajax({
        url: './db/sfile/addClass.php',
        method: 'POST',
        data: {sheetName: 'class'},
        success(bool) {
            if (bool)
            {
                Promise.all(
                    [addStudentInfo(),
                    addClassColumnname(),
                    addClassColumnitems(),
                    addClassLevel()]
                )
            }
        },
        error() {}
    })
    refresh(className)
}

function addStudentInfo()
{
    $.ajax({
        url: './db/sfile/addStudentInfo.php',
        method: 'POST',
        data: {sheetName: 'studentinfo'},
        success(bool) {
            console.log((bool) ? 'addinfo' : 'addfailinfo')
        },
        error() {}
    })
}

function addClassColumnname()
{
    $.ajax({
        url: './db/sfile/addColumnname.php',
        method: 'POST',
        data: {sheetName: 'columnname'},
        success(bool) {
            console.log((bool) ? 'addcolumnname' : 'addfailcolumnname')
        },
        error() {}
    })
}

function addClassColumnitems()
{
    $.ajax({
        url: './db/sfile/addColumnitems.php',
        method: 'POST',
        data: {sheetName: 'columnitems'},
        success(bool) {
            console.log((bool) ? 'addcolumnitems' : 'addfailcolumnitems')
        },
        error() {}
    })
}

function addClassLevel()
{
    $.ajax({
        url: './db/sfile/addLevel.php',
        method: 'POST',
        data: {sheetName: 'level'},
        success(bool) {
            console.log((bool) ? 'addlevel' : 'addfaillevel')
        },
        error() {}
    })
}

function addLearnFile(th, sid, name)
{
    let fmData = new FormData()
    fmData.append('sinfo[]', sid)
    fmData.append('sinfo[]', name)
    for (let i = 0; i < th.files.length; i++)
        fmData.append('learnfile[]', th.files[i])

    $.ajax({
        url: './db/sfile/addLearnFile.php',
        method: 'POST',
        cache: false,
        contentType: false,
        processData: false,
        data: fmData,
        success(bool) {
            (bool) ? refresh(className) : alert('檔案上傳失敗！')            
        },
        error() {}
    })
}

// $('#upload_file').click(function(event) {
//     console.log($('#userFile'))
//     // regex
//     const regex = /^([a-zA-Z0-9\s_\\.\-:])+(.csv|.txt)$/
//     const userFile = $('#userFile')

//     // valid file name and subtitle
//     if (regex.test(userFile.val().toLowerCase())) {
//         // file not unefined
//         if (typeof(userFile) !== 'undefined') {
//             let reader = new FileReader()

//             reader.onload = (event) => {
//                 // ajax php upload file data
//                 console.log(event.target.result.split('\n'))
//             }

//             reader.readAsText(userFile[0].files[0])
//         }else
//             alert('尚無資料上傳！')
//     }else
//         alert('檔案錯誤或副檔名錯誤(only support csv file)！')


//     // onload file data

//     // read data

// });