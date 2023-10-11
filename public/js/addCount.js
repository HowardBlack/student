let addN = 0

// ======= info 增加筆數 =======
$('#addInfoCount').click(function(e) {
    addN = $(`#${block}Count`).val()

    // 新增資料筆數
    for (let i = 0; i < addN; i++) {
        $(`#${block}Info`).append(`
            <tr>
                <td class=col-2><input type="checkbox" name="${block}BoxDel"></td>
                <td class=col-2 name="${block}count"></td>
                <td class=col-1><input type="text" name="addSid" placeholder="EX: 10910110"></td>
                <td class=col-1><input type="text" name="addName" placeholder="EX: 陳宏恩"></td>
            </tr>
        `)
    }
    // 每筆資料繫上編號
    reNumber(block)
})

$('#delAddInfoBox').click(function(e) {
    blockCheck(block)
    reNumber(block)
})

// ======= col 增加筆數 =======
$('#addColCount').click(function(e) {
    addN = $(`#${block}Count`).val()

    for (let i = 0; i < addN; i++) {
        $(`#${block}Info`).append(`
            <tr>
                <td class=col-2><input type="checkbox" name="${block}BoxDel"></td>
                <td class=col-2 name="${block}count"></td>
                <td class=col-1><input type="text" name="addType" placeholder="EX: read"></td>
                <td class=col-1><input type="text" name="addTypeName" placeholder="EX: 讀"></td>
            </tr>
        `)
    }

    reNumber(block)
})

$('#delAddColBox').click(function(e) {
    blockCheck(block)
    reNumber(block)
})

// ======= item 增加筆數 =======
$('#addItemCount').click(function(e) {
    addN = $(`#${block}Count`).val()

    for (let i = 0; i < addN; i++) {
        let randomCode = getRandomCode(8)
        $(`#${block}Info`).append(`
            <tr>
                <td class=col-2><input type="checkbox" name="${block}BoxDel"></td>
                <td class=col-2 name="${block}count"></td>
                <td class=col-2>
                    <select name="defaultType" id="${randomCode}">
                        <option value="none">尚未選擇班級！</option>
                    </select>
                </td>
                <td>
                    <textarea name="addItemName" placeholder="EX: 聆聽並分享想法" cols="70" rows="4"></textarea>
                </td>
            </tr>
        `)
        fetchColumnValue(document.getElementById(randomCode))
    }

    reNumber(block)
})

$('#delAddItemBox').click(function(e) {
    blockCheck(block)
    reNumber(block)
})

// ======= level 增加筆數 =======
$('#addLevelCount').click(function(e) {
    addN = $(`#${block}Count`).val()

    for (let i = 0; i < addN; i++) {        
        $(`#${block}Info`).append(`
            <tr>
                <td class=col-2><input type="checkbox" name="${block}BoxDel"></td>
                <td class=col-2 name="${block}count"></td>
                <td class=col-1>
                    <input type="text" name="addLevel" placeholder="EX: 1">
                </td>
                <td class=col-1>
                    <input type="text" name="addItemLevel" placeholder="EX: 弱">
                </td>
            </tr>
        `)
    }

    reNumber(block)
})

$('#delAddLevelBox').click(function(e) {
    blockCheck(block)
    reNumber(block)
})

// ======= clas 增加筆數 =======
$('#addClasCount').click(function(e) {
    addN = $(`#${block}Count`).val()

    for (let i = 0; i < addN; i++) {        
        $(`#${block}Info`).append(`
            <tr>
                <td class=col-2><input type="checkbox" name="${block}BoxDel"></td>
                <td class=col-2 name="${block}count"></td>
                <td class=col-1>
                    <input type="text" name="addClassName" placeholder="EX: 資三A">
                </td>
            </tr>
        `)
    }

    reNumber(block)
})

$('#delAddClasBox').click(function(e) {
    blockCheck(block)
    reNumber(block)
})

function setBlock(b, s) {
    block = b
    dtName = s
}

function blockCheck(block) {
    $(`input[name=${block}BoxDel]:checked`).each(function(index, item) {
        $(`#${block}tr${item.id}`).remove()
    })
}

function reNumber(block) {
    let trAll = document.querySelectorAll(`#${block}Info tr`)
    trAll.forEach((item, index) => item.setAttribute('id', `${block}tr${index}`))
    let allBox = document.getElementsByName(`${block}BoxDel`)
    allBox.forEach((item, index) => item.setAttribute('id', index))
    let tdCount = document.getElementsByName(`${block}count`)
    tdCount.forEach((item, index) => item.innerHTML = index + 1)
}

function checkedBoxAll() {
    $(`input[name=${block}BoxDel]`).each(function(index, item) {
        item.checked = !item.checked
    })
}

function getRandomCode(length) {
    if (length > 0) {
       let data = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
       let nums = "";
       for (let i = 0; i < length; i++) {
          let r = parseInt(Math.random() * 61);
          nums += data[r];
       }
       return nums;
    } else {
       return false;
    }
 }
