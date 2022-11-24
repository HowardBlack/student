function defaultAddType(className) {
    $('#defaultType').empty()
    $.ajax({
        url: './db/loadColumn.php',
        method: 'POST',
        dataType: 'JSON',
        data: {class: className},
        success(data) {
            if (data.length) {
                for (let row of data) {
                    const type = row[0]                    
                    $('#defaultType').append($('<option>',{
                        value: type,
                        text: type
                    }))
                }
            }else {
                $('#defaultType').append(new Option('尚無資料', '尚無資料'))
            }
        },
        error() {
            $('#defaultType').append(new Option('尚無資料', '尚無資料'))
        }
    })
}

let dtName = ""

function addInfo() {
    if (valid_dbName(className)) {
        const add_sid = $('#addSid').val()
        const add_name = $('#addName').val()
        if (add_sid != "" && add_name != "") {
            dtName = "studentinfo"
        }else
            alert('請填寫完整資料')    
    }else
        alert('請選擇班級！')
}

function addCol() {
    if (valid_dbName(className)) {

    }else
        alert('請選擇班級！')
}

function addItem() {
    if (valid_dbName(className)) {

    }else
        alert('請選擇班級！')
}

function valid_dbName(className) {
    return (className != '請選擇') ? true : false
}

function fetchAllDataTable({class: className, datatable: dtName}) {
    
}
