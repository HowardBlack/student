<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>學生學習紀錄</title>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.1/css/bootstrap.min.css' integrity='sha512-siwe/oXMhSjGCwLn+scraPOWrJxHlUgMBMZXdPe2Tnk3I0x3ESCoLz7WZ5NTH6SZrywMY+PB1cjyqJ5jAluCOg==' crossorigin='anonymous'/>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css' integrity='sha512-H9jrZiiopUdsLpg94A333EfumgUBpO9MdbxStdeITo+KEIMaNfHNvwyjjDJb+ERPaRS6DpyRlKbvPUasNItRyw==' crossorigin='anonymous'/>
    <link rel="stylesheet" href="./public/css/index.css">
</head>
<body>
    <div class="container">
    <!-- header -->
        <div class="container-fluid p-3 mb-3 bg-black text-white text-center">
            <h1>學習記錄</h1>
        </div>
    <!-- content -->
        <div class="content">
            <!-- 選單 -->  
            <p>
                <span>班級</span>
                <select name="class" id="class">
                    <option value="請選擇">請選擇</option>
                </select>
            </p>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-learn-record-tab" data-bs-toggle="pill" data-bs-target="#learn-record" type="button" aria-selected="true" onclick="setBlockMean('none', 'none', loadClass)">學習記錄</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-query-tab" data-bs-toggle="pill" data-bs-target="#query" type="button" aria-selected="false" onclick="setBlockMean('choice', 'choiceitem', loadAllRecord)">學生記錄查詢</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-create-tab" data-bs-toggle="pill" data-bs-target="#create" type="button" aria-selected="false" onclick="defaultAddType(`${$('#class').val()}`)">新增資料</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-info-tab" data-bs-toggle="pill" data-bs-target="#info" type="button" aria-selected="false" onclick="setBlockMean('info', 'studentinfo', loadInfo)">基本資料</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-col-tab" data-bs-toggle="pill" data-bs-target="#col" type="button" aria-selected="false" onclick="setBlockMean('col', 'columnname', loadCol)">欄位項目</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-items-tab" data-bs-toggle="pill" data-bs-target="#items" type="button" aria-selected="false" onclick="setBlockMean('item', 'columnitems', loadItems)">欄位細項</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-level-tab" data-bs-toggle="pill" data-bs-target="#level" type="button" aria-selected="false" onclick="setBlockMean('level', 'itemlevel', loadLevel)">程度項目</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-clas-tab" data-bs-toggle="pill" data-bs-target="#clas" type="button" aria-selected="false" onclick="setBlockMean('clas', 'classmanage', loadClassName)">班級管理</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-explain-tab" data-bs-toggle="pill" data-bs-target="#explain" type="button" aria-selected="false">系統操作手冊</button>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
            <!-- 學習紀錄 -->
                <div class="tab-pane fade show active" id="learn-record">
                    <p>
                        <span>月份</span>
                        <select name="month" id="month">
                            <option value="9">九月</option>
                            <option value="10">十月</option>
                            <option value="11">十一月</option>
                            <option value="12">十二月</option>
                            <option value="1">一月</option>
                            <option value="2">二月</option>
                            <option value="3">三月</option>
                            <option value="4">四月</option>
                            <option value="5">五月</option>
                            <option value="6">六月</option>
                            <option value="7">七月</option>
                            <option value="8">八月</option>
                        </select>
                        <strong class="notice">P.S.目前檔案可支援副檔名：.mp3 .mp4 .jpg .png .pdf</strong>
                    </p>
                    <table class="table table-border table-hover table-sm">
                        <thead>
                            <tr valign="center" align="center">
                                <th>學號</th>
                                <th>姓名</th>
                                <th>
                                    檔案
                                    <button class="btn btn-danger" id="delFileCheckbox">刪除勾選檔案</button>
                                </th>
                                <th>功能</th>
                            </tr>
                        </thead>
                        <tbody id="sList">
                            <tr><td colspan="4">尚未選擇班級！</td></tr>
                        </tbody>
                    </table>
                    <ul class="file_list icon mb5 h3">
                </div>                
            <!-- 基本資料 -->
                <div class="tab-pane fade" id="info">
                    <table class="table table-border table-hover table-sm">
                        <thead>
                            <tr align="center">
                                <th>
                                    <button class="btn btn-danger" id="infoBoxDel">刪除</button>
                                    <button class="btn btn-warning" id="infoCbAll">全選</button>
                                </th>
                                <th>學號</th>
                                <th>姓名</th>
                                <th>功能</th>
                            </tr>
                        </thead>
                        <tbody id="infoList">
                            <tr><td colspan="4">尚未選擇班級！</td></tr>
                        </tbody>
                    </table>
                </div>
            <!-- 欄位項目 -->
                <div class="tab-pane fade" id="col">
                    <table class="table table-border table-hover table-sm">
                        <thead>
                            <tr align="center">
                                <th>
                                    <button class="btn btn-danger" id="colBoxDel">刪除</button>
                                    <button class="btn btn-warning" id="colCbAll">全選</button>
                                </th>
                                <th>代號</th>
                                <th>名稱</th>
                                <th>功能</th>
                            </tr>
                        </thead>
                        <tbody id="colList">
                            <tr><td colspan="4">尚未選擇班級！</td></tr>
                        </tbody>
                    </table>
                </div>
            <!-- 欄位細項 -->
                <div class="tab-pane fade" id="items">
                    <table class="table table-border table-hover table-sm">
                        <thead>
                            <tr align="center">
                                <th>
                                    <button class="btn btn-danger" id="itemBoxDel">刪除</button>
                                    <button class="btn btn-warning" id="itemCbAll">全選</button>
                                </th>
                                <th>欄位代號</th>
                                <th>項目名稱</th>
                                <th>功能</th>
                            </tr>
                        </thead>
                        <tbody id="itemsList">
                            <tr><td colspan="4">尚未選擇班級！</td></tr>
                        </tbody>
                    </table>
                </div>
            <!-- 程度項目 -->
                <div class="tab-pane fade" id="level">
                    <table class="table table-border table-hover table-sm">
                        <thead>
                            <tr align="center">
                                <th>
                                    <button class="btn btn-danger" id="levelBoxDel">刪除</button>
                                    <button class="btn btn-warning" id="levelCbAll">全選</button>
                                </th>
                                <th>代號</th>
                                <th>名稱</th>
                                <th>功能</th>
                            </tr>
                        </thead>
                        <tbody id="levelList">
                            <tr><td colspan="4">尚未選擇班級！</td></tr>
                        </tbody>
                    </table>
                </div>
            <!-- 學生記錄查詢 -->
                <div class="tab-pane fade" id="query">
                <!-- 查詢姓名 -->
                    <p>
                        <span>姓名</span>
                        <select id="nameList">
                            <option value="請選擇班級">請選擇班級</option>
                        </select>
                    </p>
                <!-- 欄位項目 -->
                    <p>
                        <span>欄位名稱</span>
                        <select id="searchColList">
                            <option value="請選擇班級">請選擇班級</option>
                        </select>
                    </p>
                <!-- 欄位細項 -->
                    <p>
                        <span>欄位細項</span>
                        <select id="searchItemList">
                            <option value="請選擇欄位項目">請選擇欄位項目</option>
                        </select>
                    </p>
                <!-- 查詢月份 -->
                    <p>
                        <span>月份</span>
                        <label>
                            <input type="checkbox" name="chBox" value="9">
                            9月
                        </label>
                        <label>
                            <input type="checkbox" name="chBox" value="10">
                            10月
                        </label>
                        <label>
                            <input type="checkbox" name="chBox" value="11">
                            11月
                        </label>
                        <label>
                            <input type="checkbox" name="chBox" value="12">
                            12月
                        </label>
                        <label>
                            <input type="checkbox" name="chBox" value="1">
                            1月
                        </label>
                        <label>
                            <input type="checkbox" name="chBox" value="2">
                            2月
                        </label>
                        <label>
                            <input type="checkbox" name="chBox" value="3">
                            3月
                        </label>
                        <label>
                            <input type="checkbox" name="chBox" value="4">
                            4月
                        </label>
                        <label>
                            <input type="checkbox" name="chBox" value="5">
                            5月
                        </label>
                        <label>
                            <input type="checkbox" name="chBox" value="6">
                            6月
                        </label>
                        <label>
                            <input type="checkbox" name="chBox" value="7">
                            7月
                        </label>
                        <label>
                            <input type="checkbox" name="chBox" value="8">
                            8月
                        </label>
                    </p>
                <!-- 顯示查詢結果 -->
                    <table class="table table-border table-hover table-sm">
                        <thead class="normal">
                            <tr align="center">
                                <th>
                                    <button class="btn btn-danger" id="choiceBoxDel">刪除</button>
                                    <button class="btn btn-warning" id="choiceCbAll">全選</button>
                                </th>
                                <th>筆數</th>
                                <th>學號</th>
                                <th>姓名</th>
                                <th>項目</th>
                                <th>細項</th>
                                <th>程度</th>
                                <th>備註</th>
                                <th>月份</th>
                                <th>最後修改時間</th>
                            </tr>
                        </thead>
                        <tbody id="queryList">
                            <tr><td colspan="10">尚未選擇班級！</td></tr>
                        </tbody>
                    </table>
                </div>
            <!-- 新增各項資料 -->
                <div class="tab-pane fade" id="create">
                    <div class="container mt-3">
                        <div id="accordion">
                            <div class="fileUpload mb-3">
                                <input type="file" multiple="multiple" id="userFile">
                                <input type="button" id="upload_file" class="btn btn-primary" value="上傳檔案">
                            </div>
                        <!-- 新增班級 -->
                            <div class="card">
                                <div class="card-header" data-bs-toggle="collapse" href="#collapseFive" onclick="setBlock('clas', 'classmanage')">
                                    班級
                                </div>
                                <div id="collapseFive" class="collapse" data-bs-parent="#accordion">
                                    <div class="card-body">
                                        <p>
                                            <span>新增</span>
                                            <input class="addcount" type="number" id="clasCount" value="1" min="1">
                                            <span>筆資料</span>
                                            <button class="btn btn-primary" id="addClasCount">新增筆數</button>
                                            <button class="btn btn-success" onclick="addclas()">上傳</button>
                                        </p>
                                        <table class="table table-sm">
                                            <thead>
                                                <th>
                                                    <button class="btn btn-danger" id="delAddClasBox">刪除勾選</button>
                                                    <button class="btn btn-warning" onclick="checkedBoxAll()">全選</button>
                                                </th>
                                                <th>筆數</th>
                                                <th>班級名稱</th>
                                            </thead>
                                            <tbody id="clasInfo"></tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        <!-- 學生基本資料 -->
                            <div class="card">
                                <div class="card-header" data-bs-toggle="collapse" href="#collapseOne" onclick="setBlock('info', 'studentinfo')">
                                    學生基本資料
                                </div>
                                <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
                                    <div class="card-body">
                                        <p>
                                            <span>新增</span>
                                            <input class="addcount" type="number" id="infoCount" value="1" min="1">
                                            <span>筆資料</span>
                                            <button class="btn btn-primary" id="addInfoCount">新增筆數</button>
                                            <button class="btn btn-success" onclick="addInfo()">上傳</button>
                                        </p>
                                        <table class="table table-sm" >
                                            <thead>
                                                <th>
                                                    <button class="btn btn-danger" id="delAddInfoBox">刪除勾選</button>
                                                    <button class="btn btn-warning" onclick="checkedBoxAll()">全選</button>
                                                </th>
                                                <th>筆數</th>
                                                <th>學號</th>
                                                <th>姓名</th>
                                            </thead>
                                            <tbody id="infoInfo"></tbody>
                                        </table>                                        
                                    </div>
                                </div>
                            </div>
                        <!-- 欄位項目 -->
                            <div class="card">
                                <div class="card-header" data-bs-toggle="collapse" href="#collapseTwo" onclick="setBlock('col', 'columnname')">
                                    欄位項目
                                </div>
                                <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
                                    <div class="card-body">
                                        <p>
                                            <span>新增</span>
                                            <input class="addcount" type="number" id="colCount" value="1" min="1">
                                            <span>筆資料</span>
                                            <button class="btn btn-primary" id="addColCount">新增筆數</button>
                                            <button class="btn btn-success" onclick="addCol()">上傳</button>
                                        </p>
                                        <table class="table table-sm" >
                                            <thead>
                                                <th>
                                                    <button class="btn btn-danger" id="delAddColBox">刪除勾選</button>
                                                    <button class="btn btn-warning" onclick="checkedBoxAll()">全選</button>
                                                </th>
                                                <th>筆數</th>
                                                <th>代號</th>
                                                <th>名稱</th>
                                            </thead>
                                            <tbody id="colInfo"></tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        <!-- 欄位細項 -->
                            <div class="card">
                                <div class="card-header" data-bs-toggle="collapse" href="#collapseThree" onclick="setBlock('item', 'columnitems')">
                                    欄位細項
                                </div>
                                <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
                                    <div class="card-body">
                                        <p>
                                            <span>新增</span>
                                            <input class="addcount" type="number" id="itemCount" value="1" min="1">
                                            <span>筆資料</span>
                                            <button class="btn btn-primary" id="addItemCount">新增筆數</button>
                                            <button class="btn btn-success" onclick="addItem()">上傳</button>
                                        </p>
                                        <table class="table table-sm" >
                                            <thead>
                                                <th>
                                                    <button class="btn btn-danger" id="delAddItemBox">刪除勾選</button>
                                                    <button class="btn btn-warning" onclick="checkedBoxAll()">全選</button>
                                                </th>
                                                <th>筆數</th>
                                                <th>代號</th>
                                                <th>名稱</th>
                                            </thead>
                                            <tbody id="itemInfo"></tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        <!-- 程度項目 -->
                            <div class="card">
                                <div class="card-header" data-bs-toggle="collapse" href="#collapseFour" onclick="setBlock('level', 'itemlevel')">
                                    程度項目
                                </div>
                                <div id="collapseFour" class="collapse" data-bs-parent="#accordion">
                                    <div class="card-body">
                                        <p>
                                            <span>新增</span>
                                            <input class="addcount" type="number" id="levelCount" value="1" min="1">
                                            <span>筆資料</span>
                                            <button class="btn btn-primary" id="addLevelCount">新增筆數</button>
                                            <button class="btn btn-success" onclick="addLevel()">上傳</button>
                                        </p>
                                        <table class="table table-sm" >
                                            <thead>
                                                <th>
                                                    <button class="btn btn-danger" id="delAddLevelBox">刪除勾選</button>
                                                    <button class="btn btn-warning" onclick="checkedBoxAll()">全選</button>
                                                </th>
                                                <th>筆數</th>
                                                <th>代號</th>
                                                <th>名稱</th>
                                            </thead>
                                            <tbody id="levelInfo"></tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p style="color: red; text-align: center;"><strong>P.S.此頁無提供下方的頁數切換功能</strong></p>
                    </div>
                </div>
            <!-- 班級管理 -->
                <div class="tab-pane fade" id="clas">
                    <p style="color: red; text-align: center;">
                        <strong>P.S.按鈕文字顯示啟用為尚未啟用；按鈕文字顯示停用為已啟用</strong>
                    </p>
                    <table class="table table-border table-hover table-sm">
                        <thead>
                            <tr align="center">
                                <th>
                                    <button class="btn btn-danger" id="clasBoxDel">刪除資料</button>
                                    <button class="btn btn-warning" id="clasCbAll">全選</button>
                                </th>
                                <th>ID</th>
                                <th>班級名稱</th>
                                <th>建立時間</th>
                                <th>已保留時間</th>
                                <th>功能</th>
                            </tr>
                        </thead>
                        <tbody id="clasList">
                            <tr><td colspan="6">尚未選擇班級！</td></tr>
                        </tbody>
                    </table>
                </div>
            <!-- 系統操作手冊 -->
                <div class="tab-pane fade" id="explain">
                    <ul>
                        <li>
                            <h5>使用 Excel 匯入</h5>
                            <p>
                                <ol>
                                    <li>
                                        <span>使用前，請務必詳閱以下幾點注意事項：</span>
                                        <ol type="a">
                                            <li>
                                                <strong class="notice">
                                                    無論班級是否相同，每次上傳檔案系統皆會視為新資料，並不會累加到先前的資料。
                                                </strong>
                                            </li>
                                            <li>
                                                <strong class="notice">
                                                    建議每學期使用 Excel 一次匯入所有學生資訊，其餘使用 逐筆新增 的方式新增資料。
                                                </strong>
                                            </li>
                                            <li>
                                                <strong class="notice">
                                                    各個工作表名稱及第一列欄位名稱勿更動(因程式設計需抓取對應的資訊)。
                                                </strong>
                                            </li>
                                            <li>
                                                <strong class="notice">
                                                    歡迎使用，請點擊下載右側
                                                    <a href="../../ExcelFileUpload/ClassExample.xlsx" download>Excel 範例檔案</a>。
                                                </strong>
                                            </li>
                                        </ol>
                                    </li>
                                    <li>
                                        <h6>檔案依真實資料修改後，請至 新增資料區塊 / 選擇上傳檔案 / 點擊上傳</h6>
                                        <img src="./public/images/SystemOperationManual/AddUploadFile.png" alt="檔案上傳步驟" class="exampleImage">
                                    </li>
                                    <li>
                                        <h6>新增成功系統會顯示視窗告知『新增完成』</h6>
                                        <img src="./public/images/SystemOperationManual/AddUploadFileSuccess.png" alt="檔案上傳成功" class="exampleImage">
                                    </li>
                                    <li>
                                        <h6>至班級管理確認班級已新增完成即可開始使用</h6>
                                    </li>
                                </ol>
                            </p>
                        </li>
                        <li>
                            <h5>不使用 Excel 匯入(逐筆新增)</h5>
                            <ol>
                                <li>
                                    <h6>新增班級</h6>
                                    <img src="./public/images/SystemOperationManual/AddClass.png" alt="新增班級" class="exampleImage">
                                </li>
                                <li>
                                    <h6>先選擇班級，再依序新增該班級學生基本資料、欄位項目、欄位細項、程度項目等(各項新增步驟如下圖所示)</h6>
                                    <img src="./public/images/SystemOperationManual/AddClassItem.png" alt="新增學生基本資料" class="exampleImage">
                                </li>
                            </ol>
                        </li>
                    </ul>
                    <p style="color: red; text-align: center;"><strong>P.S.此頁無提供下方的頁數切換功能</strong></p>
                </div>
            </div>
        <!-- 每頁筆數 -->
            <div class="text-center">
                <span id="limit">
                    <span>每頁筆數</span>
                    <input type="radio" id="limit1" name="limit" value="10" checked>
                    <label for="limit1">10</label>
                    <input type="radio" id="limit2" name="limit" value="25">
                    <label for="limit2">25</label>
                    <input type="radio" id="limit3" name="limit" value="50">
                    <label for="limit3">50</label>
                    <input type="radio" id="limit4" name="limit" value="100">
                    <label for="limit4">100</label>
                    <input type="radio" id="limit5" name="limit" value="200">
                    <label for="limit5">200</label>
                    <input type="radio" id="limit6" name="limit" value="500">
                    <label for="limit6">500</label>
                </span>
                <span>第</span>
                <select id="paginationList"></select>
                <span>頁</span>
            </div>
        </div>
    </div>

    <script src='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.1/js/bootstrap.min.js' integrity='sha512-vyRAVI0IEm6LI/fVSv/Wq/d0KUfrg3hJq2Qz5FlfER69sf3ZHlOrsLriNm49FxnpUGmhx+TaJKwJ+ByTLKT+Yg==' crossorigin='anonymous'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js' integrity='sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==' crossorigin='anonymous'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js' integrity='sha512-uURl+ZXMBrF4AwGaWmEetzrd+J5/8NRkWAvJx5sbPSSuOb0bZLqf+tOzniObO00BjHa/dD7gub9oCGMLPQHtQA==' crossorigin='anonymous'></script>
    <script src="./public/js/class.js"></script>
    <script src="./public/js/index.js"></script>
    <script src="./public/js/learnRecord.js"></script>
    <script src="./public/js/info.js"></script>
    <script src="./public/js/col.js"></script>
    <script src="./public/js/items.js"></script>
    <script src="./public/js/allLearnRecord.js"></script>
    <script src="./public/js/add.js"></script>
    <script src="./public/js/level.js"></script>
    <script src="./public/js/addFile.js"></script>
    <script src="./public/js/addCount.js"></script>
    <script src="./public/js/delCheckBox.js"></script>
    <script src="./public/js/pagination.js"></script>

</body>
</html>