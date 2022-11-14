<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>班級各項資訊</title>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.1/css/bootstrap.min.css' integrity='sha512-siwe/oXMhSjGCwLn+scraPOWrJxHlUgMBMZXdPe2Tnk3I0x3ESCoLz7WZ5NTH6SZrywMY+PB1cjyqJ5jAluCOg==' crossorigin='anonymous'/>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.1/js/bootstrap.min.js' integrity='sha512-vyRAVI0IEm6LI/fVSv/Wq/d0KUfrg3hJq2Qz5FlfER69sf3ZHlOrsLriNm49FxnpUGmhx+TaJKwJ+ByTLKT+Yg==' crossorigin='anonymous'></script>
</head>
<body>
    <div class="container">
        <!-- <p>
            <span>學年</span>
            <select name="optYear" id="optYear"></select>
        </p> -->
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
        <!-- 
            新增、修改、刪除
            學生所有資料、各欄位、各細項
         -->
        <h3>個人資料</h3>
        <table>
            
        </table>

        <h3>學生資料</h1>
        <table class="table" border="1">
            <thead>
                <tr align="center">
                    <th>學號</th>
                    <th>姓名</th>
                    <th>功能</th>
                </tr>
            </thead>
            <tbody id="sList">
                <tr><td colspan="3">尚未選擇班級！</td></tr>
            </tbody>
        </table>

        <h3>項目資料</h1>
        <table class="table" border="1">
            <thead>
                <tr align="center">
                    <th>編號</th>
                    <th>名稱</th>
                    <th>功能</th>
                </tr>
            </thead>
            <tbody id="cList">
                <tr><td colspan="2">尚無資料</td></tr>
            </tbody>
        </table>

        <h3>細項資料</h1>
        <table class="table" border="1">
            <thead>
                <tr align="center">
                    <th>編號</th>
                    <th>欄位名稱</th>
                    <th>項目</th>
                    <th>功能</th>
                </tr>
            </thead>
            <tbody id="itemList">
                <tr><td colspan="2">尚無資料</td></tr>
            </tbody>
        </table>
    </div>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js' integrity='sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==' crossorigin='anonymous'></script>
    <script src="js/class.js"></script>
</body>
</html>