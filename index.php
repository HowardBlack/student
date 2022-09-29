<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>學生資訊系統</title>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.1/css/bootstrap.min.css' integrity='sha512-siwe/oXMhSjGCwLn+scraPOWrJxHlUgMBMZXdPe2Tnk3I0x3ESCoLz7WZ5NTH6SZrywMY+PB1cjyqJ5jAluCOg==' crossorigin='anonymous'/>
</head>
<body>
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
    <table border="1" class="">
        <thead>
            <tr align="center">
                <th>學號</th>
                <th>姓名</th>
                <th colspan="2">聽</th>
                <th colspan="2">說</th>
            </tr>
        </thead>
        <tbody id="sList">
            <tr>
                <td>10910110</td>
                <td>陳宏恩</td>
                <td>
                    <select name="" id="">
                        <option value="聆聽並分享想法">聆聽並分享想法</option>
                        <option value="重述故事">重述故事</option>
                        <option value="說出故事大意/心得">說出故事大意/心得</option>
                    </select>
                </td>
                <td>
                    <textarea name="" id="" cols="10" rows="1"></textarea>
                </td>
                <td>
                    <select name="" id="">
                        <option value="聆聽並分享想法">聆聽並分享想法</option>
                        <option value="重述故事">重述故事</option>
                        <option value="說出故事大意/心得">說出故事大意/心得</option>
                    </select>
                </td>
                <td>
                    <textarea name="" id="" cols="10" rows="1"></textarea>
                </td>
            </tr>
        </tbody>
    </table>
    
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js' integrity='sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==' crossorigin='anonymous'></script>
    <script src="./js/script.js"></script>
</body>
</html>