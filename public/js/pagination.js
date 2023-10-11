let showPageCount = 10;
let page = 1;
let loadName = loadClass;
$("input[name='limit']").click((e) => {
    page = 1;
    showPageCount = e.target.value;
    loadName(className);
})

$('#paginationList').change((e) => {
    page = e.target.value;
    loadName(className);
})