# 111(2022)/11/27
## 已完成
1. 學習記錄更新資料已可取消 modal
2. 學習紀錄已完成 search
## 待完成
1. 學年、學期問題
2. 新增資料使用 file upload to database
3. student learn record output excel file
4. UI/UX、frontEnd、backEnd、set up a server for outsiders to use
5. coding review ==> clean code

# 111(2022)/11/26
#
1. 學習記錄更新資料沒辦法取消 modal
2. 學習記錄尚未做 search => name and month

# 111(2022)/11/17
#
如果沒有資料庫
1. 新增班級資料庫
2. 新增學生資料表(studentinfo) ==> *sid、name
3. 新增欄位表(columnname) ==> *type、typeName
4. 新增項目表(columnitems) ==> *id、type、item
5. 新增選取表(choiceitem) ==> *id、sid、type、item、remark、recordMonth

如果資料庫沒有資料
1. 提供新增資料選項

如果有資料庫有資料
1. 顯示所有學生資料 ==> 並提供新增、修改、刪除學生資料
2. 顯示所有欄位項目 ==> 並提供新增、修改、刪除欄位資料
3. 顯示所有備註資料 ==> 並提供刪除功能

# 111(2022)/10/11
## 已修正
1. dialog 可顯示不同人位 <== id 區分問題
2. 功能列可顥示不同資料 <== id 區分問題
## 待辦事項及問題
1. dialog 姓名只能顯示同一個人，但系統有抓每位同學
2. 功能列資料列重複問題，但資料庫只有兩筆資料
3. 欄位資料庫訪問太多次資料庫，造成效能降低 ==> session or localstorage ? or else ?
4. 新增資料至資料庫，並判別資料存在自動顯示於頁面上
    a. 未新增 save changes 事件
    
5. 各項班級所需事前新增的資料 (尚未製件相關功能)
    a. 班級資料庫
    b. 學生資料表
    c. 欄位資料表
    d. 細項資料表
    e. 選擇細項資料表

6. render data
    a. 班級+月份選擇完成
    b. 