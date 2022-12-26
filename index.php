<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>學生學習紀錄</title>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.1/css/bootstrap.min.css' integrity='sha512-siwe/oXMhSjGCwLn+scraPOWrJxHlUgMBMZXdPe2Tnk3I0x3ESCoLz7WZ5NTH6SZrywMY+PB1cjyqJ5jAluCOg==' crossorigin='anonymous'/>
    <link rel="stylesheet" href="./css/index.css">    
    <script src='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.1/js/bootstrap.min.js' integrity='sha512-vyRAVI0IEm6LI/fVSv/Wq/d0KUfrg3hJq2Qz5FlfER69sf3ZHlOrsLriNm49FxnpUGmhx+TaJKwJ+ByTLKT+Yg==' crossorigin='anonymous'></script>
</head>
<body>
    <div class="container">
        <!-- header -->
        <div class="container-fluid p-3 mb-3 bg-black text-white text-center">
            <h1>學生學習記錄</h1>
        </div>

        <!-- content -->
        <div class="content">
            <p>
                <span>學年</span>
                <select name="" id="year"></select>
            </p>
            <p>
                <span>班級</span>
                <select name="class" id="class">
                    <option value="請選擇">請選擇</option>
                    <option value="資三a">資三A</option>
                    <option value="資三b">資三B</option>
                    <option value="資三c">資三C</option>
                    <option value="資三d">資三D</option>
                    <option value="資三e">資三E</option>
                    <option value="資三f">資三F</option>
                </select>
            </p>
            <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-learn-record-tab" data-bs-toggle="pill" data-bs-target="#learn-record" type="button" aria-selected="true">學習記錄</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-info-tab" data-bs-toggle="pill" data-bs-target="#info" type="button" aria-selected="false">基本資料</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-col-tab" data-bs-toggle="pill" data-bs-target="#col" type="button" aria-selected="false">欄位項目</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-items-tab" data-bs-toggle="pill" data-bs-target="#items" type="button" aria-selected="false">欄位細項</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-query-tab" data-bs-toggle="pill" data-bs-target="#query" type="button" aria-selected="false">學生記錄查詢</button>
                </li>
                <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-create-tab" data-bs-toggle="pill" data-bs-target="#create" type="button" aria-selected="false">新增資料</button>
                </li>
            </ul>
            <div class="tab-content" id="pills-tabContent">
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
                    </p>
                    <table class="table table-border table-hover table-sm">
                        <thead>
                            <tr valign="center" align="center">
                                <th>學號</th>
                                <th>姓名</th>
                                <th>功能</th>
                            </tr>
                        </thead>
                        <tbody id="sList">
                            <tr><td colspan="3">尚未選擇班級！</td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="tab-pane fade" id="info">
                    <table class="table table-border table-hover table-sm">
                        <thead>
                            <tr align="center">
                                <th>學號</th>
                                <th>姓名</th>
                                <th>功能</th>
                            </tr>
                        </thead>
                        <tbody id="infoList">
                            <tr><td colspan="3">尚未選擇班級！</td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="tab-pane fade" id="col">
                    <table class="table table-border table-hover table-sm">
                        <thead>
                            <tr align="center">
                                <th>代號</th>
                                <th>名稱</th>
                                <th>功能</th>
                            </tr>
                        </thead>
                        <tbody id="colList">
                            <tr><td colspan="3">尚未選擇班級！</td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="tab-pane fade" id="items">
                    <table class="table table-border table-hover table-sm">
                        <thead>
                            <tr align="center">
                                <th>欄位代號</th>
                                <th>項目名稱</th>
                                <th>功能</th>
                            </tr>
                        </thead>
                        <tbody id="itemsList">
                            <tr><td colspan="3">尚未選擇班級！</td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="tab-pane fade" id="query">
                    <p>
                        <span>姓名</span>
                        <select id="nameList">
                            <option value="尚未選擇班級">尚未選擇班級</option>
                        </select>
                    </p>
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
                    <table class="table table-border table-hover table-sm">
                        <thead>
                            <tr align="center">
                                <th>學號</th>
                                <th>姓名</th>
                                <th>項目</th>
                                <th>細項</th>
                                <th>備註</th>
                                <th>月份</th>
                                <th>功能</th>
                            </tr>
                        </thead>
                        <tbody id="queryList">
                            <tr><td colspan="7">尚未選擇班級！</td></tr>
                        </tbody>
                    </table>
                </div>
                <div class="tab-pane fade" id="create">
                    <div class="container mt-3">
                        <div id="accordion">
                            <div class="card">
                            <div class="card-header" data-bs-toggle="collapse" href="#collapseOne">
                                學生基本資料
                            </div>
                            <div id="collapseOne" class="collapse show" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <p>
                                        <span>新增</span>
                                        <input type="text" id="infoCount" value="1" size="3">
                                        <span>筆資料</span>
                                    </p>                             
                                    <table class="table" style="width: 800px">
                                        <thead>
                                            <th></th>
                                            <th>筆數</th>
                                            <th>學號</th>
                                            <th>姓名</th>
                                        </thead>
                                        <tbody id="bodyInfo">
                                            <tr>
                                                <td class="col-2"><input type="checkbox" name="delBox"></td>
                                                <td class="col-2">1</td>
                                                <td class="col-1"><input type="text" name='addSid'></td>
                                                <td class="col-1"><input type="text" name='addName'></td>
                                            </tr>
                                            <tr>
                                                <td colspan="4">
                                                    <button class="btn btn-success" onclick="addInfo()">ADD</button>
                                                    <button class="btn btn-danger">刪除勾選項目</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <input type="file" id="userFile">
                                    <input type="button" id="upload_file" class="btn btn-primary" value="上傳檔案">
                                </div>
                            </div>
                            </div>
                            <div class="card">
                            <div class="card-header" data-bs-toggle="collapse" href="#collapseTwo">
                                欄位項目
                            </div>
                            <div id="collapseTwo" class="collapse" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <p>
                                        <span>代號</span>
                                        <input type="text" id="addType">
                                    </p>
                                    <p>
                                        <span>名稱</span>
                                        <input type="text" id="addTypeName">
                                    </p>
                                    <button class="btn btn-primary" onclick="addCol()">ADD</button>
                                </div>
                            </div>
                            </div>
                            <div class="card">
                            <div class="card-header" data-bs-toggle="collapse" href="#collapseThree">
                                欄位細項
                            </div>
                            <div id="collapseThree" class="collapse" data-bs-parent="#accordion">
                                <div class="card-body">
                                    <p>
                                        <span>代號</span>
                                        <select id="defaultType"></select>
                                    </p>
                                    <p>
                                        <span>項目名稱</span>
                                        <input type="text" id="addItemName">
                                    </p>
                                    <button class="btn btn-primary" onclick="addItem()">ADD</button>                            
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>

        <!-- footer -->
        <div class="footer mt-5">
            <hr>
            <footer>
                <p>聯絡人：陳宏恩</p>
                <p>EMAIL：xyz97128@gmail.com</p>
            </footer>
        </div>    
    </div>

    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js' integrity='sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==' crossorigin='anonymous'></script>
    <script src="./js/index.js"></script>
    <script src="./js/learnRecord.js"></script>
    <script src="./js/info.js"></script>
    <script src="./js/col.js"></script>
    <script src="./js/items.js"></script>
    <script src="./js/allLearnRecord.js"></script>
    <script src="./js/add.js"></script>
    <script src="./js/addFile.js"></script>
</body>
</html>