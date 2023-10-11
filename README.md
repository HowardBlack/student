# 112(2023)/10/11
## Work Log
1. 新增靜態系統操作手冊
2. 移除班級管理 資料庫名稱 欄位
3. 修改 Excel Upload 上傳位置 - 避免檔案佔用網頁的載入速度進而影響效能
4. 移動 javascript & css 檔案路徑
5. 新增 Excel 檔案上傳的時間戳記
6. 修改 班級管理 以下問題
    a. 班級管理頁數資料 渲染
    b. 班級管理所有已啟用班級可被放入 班級下拉選單

# 112(2023)/09/29
## Work Log
1. 優化學習紀錄查詢 - 學生及欄位項目下拉選項功能
2. 解決優化 1. 後學生及欄位項目無資料(變空白)

# 112(2023)/09/24
## Work Log
1. 因loadName紀錄問題，增加班級預設選項，解決新增資料功能異常。
2. 新增手動執行新增資料庫、刪除資料庫、刪除資料表資料、連線測試
3. 修改各區域更新範圍為該區域func
4. 首頁新增系統操作說明_init

# 112(2023)/02/04
## Work Log
1. add sfile/addClass characters source
2. fix class/loadClassName select classname
3. fix class/deleteClassNameDB.php 連動刪除其他相關資料(包含 studentinfo, columnname, columnitems, itemlevel, choiceitem)
4. fix paths and optimize code...

# 112(2023)/01/28
## 已完成
1. 上傳檔案 (班級、基本資料、欄位項目、欄位細項、程度)。
## 待完成
1. 上傳檔案 refresh 刷新問題，因為其他功能都是依賴非同步，所以會繼續執行下方程式，導致上方程式未執行完畢，資料也無法顯示。
2. 每次新增一筆資料訪問一次資料庫，多次訪問造成資料庫效能降低。
3. 學習紀錄的查看資料功能，部分資料因為下拉選單的 ID 中間有空白，所以無法顯示資料庫抓取回來的資料。
    a. ID 中間不能有空白？
    resolve: 取代所有欄位項目空白
4. 莫名出現不明班級資料庫名稱，且每次新增檔案資料時，總是無法成功request，會出現 error 500。
    a. 似乎是雲端儲存傳遞造成影響，若電腦互傳無影響，不會造成資料不正確性。
    resolve: 使用筆電傳送檔案，再使用檔案上傳方式即可。

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

# 112(2023)/01/30
# DATABASE DESIGN - classdb
## 班級管理 - classmanage
1. id, showclassname, classname, permission, lastRecordTime
2. PRIMARY KEY (id, classname)
## 學生基本資料 - studentinfo
1. className, sid, name
2. PRIMARY KEY (classNae, sid, name)
## 欄位項目 - columnname
1. className, type, item
2. PRIMARY KEY (className, type, item)
## 欄位細項 - columnitems
1. className, type, items
2. PRIMARY KEY (className, type, items)
## 程度項目 - itemlevel
1. className, type, level
2. PRIMARY KEY (className, type, level)
## 學生紀錄查詢 - choiceitem
1. id, sid, type, item, typeLevel, remark, recordMonth, lastRecordTime
## Question
1. 班級重複問題
2. 一筆一筆新增導致效能降低 -> 是否可以新增 array
3. 頁面顯示方式 -> EX: 超過 10 筆就下一頁
4. INSERT INTO TABLENAME USE ARRAY -> ONE TIME MUTIPLE DATA
5. DELETE MUTILPE DATA USE IN
6. 學生升班級，原始資料怎麼保留？是否重新新增，還是有方法可以copy？
## GIT QUESTION
1. how to update local files in cloud? (how to fetch data from the cloud and update local files? ) => git pull <branch_name>
