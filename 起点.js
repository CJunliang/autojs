auto.waitFor()
// app名字和视频加载时长
var appName = "起点读书"
var loadTime = 5
launchApp(appName);
// 等待视频加载
sleep(3000);

var list = id("layoutRoot").find();
var length = list.length;
console.log("length:", length)

for (var i = 0; i < length; i++) {
    var list = id("layoutRoot").find();
    var child = list[i];
    var book = child.findOne(id("coveLayout"));
    // 书名
    var bookName = child.findOne(id("bookNameTxt"));

    if (bookName) 
        console.log(i, ':bookname: ', bookName.text())
    if (book) {
        // 点击书籍
        var result = book.click();
        console.log("click:", result)
        sleep(2000)
        if (result) {
            // 观看视频
            viewWebAD();
            back();
        }
        sleep(1000);
    }
}

function viewWebAD() {
    // 领取
    if (id("btnReceive").exists()) {
        id("btnReceive").findOne().click();
        console.log("立即领取")
        sleep(Math.floor(Math.random() * 5 + 15 + loadTime) * 1000)
        // 点击左上角退出并确认
        className("android.widget.ImageView").findOne().click()
        className("android.widget.TextView").text("关闭广告").click();
    }
    sleep(1000);
    // 红包
    // 点击红包按钮
    id("layout_hongbao").findOne().click();
    if (id("layoutHongbaoRoot").exists()) {
        console.log("马上抢")
        id("layoutHongbaoRoot").findOne().click();
        sleep(Math.floor(Math.random() * 5 + 15 + loadTime) * 1000)
        // 点击左上角退出并确认
        className("android.widget.ImageView").findOne().click()
        className("android.widget.TextView").text("关闭广告").click();
    }
    sleep(1000);
    back()
}