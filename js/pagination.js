let showPageCount = 10;
$("input[name='limit']").click((e) => {
    showPageCount = e.target.value;
    refresh(className);
})