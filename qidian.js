auto.waitFor()
var appName = "起点读书"
launchApp(appName);
sleep(3000);

//找出动态列表
var list = id("recyclerView").findOne();
console.show();
//遍历动态
console.log("childCount:",list.childCount)
for(var i=0;i<list.childCount;i++){
    var child=list.child[i];
// list.children().forEach(function (child) {
    //找出书籍或文件夹图标并点击
    var book = child.findOne(id("coveLayout"));
    var bookName = child.findOne(id("bookNameTxt"));
    if (bookName) {
        console.log('bookname: ', bookName.text())
    }
    if (book) {
        book.click();
        console.log("click")
    }
    sleep(2000);
    back();
};