auto.waitFor()
// app名字和视频加载时长
var appName = "起点读书"
var loadTime = 8
// 领取 立即领取 和 马上抢 红包的次数
// var times1 = 0, times2 = 0;
// 遍历的书籍本数
var bookNum = 0;
launchApp(appName);
// 等待视频加载
sleep(3000);

var length = id("layoutRoot").find().length;
console.log("length:", length)

for (var i = 0; i < length; i++) {
    // 当遍历的书籍数量超过15本结束
    if (bookNum >= 15)
        break;
    var list = id("layoutRoot").find();
    var child = list[i];
    var book = child.findOne(id("coveLayout"));
    // 书名
    var bookName = child.findOne(id("bookNameTxt"));

    if (bookName)
        console.log(i, ':bookname: ', bookName.text())
    if (book) {
        bookNum++;
        // 点击书籍
        var result = book.click();
        // console.log("click:", result)
        sleep(2500)
        if (result) {
            // 观看视频
            viewWebAD();
            back();
        }
        sleep(1000);
    }
    if (i == 5) {
        length = list.length;
        i = -1;
        className("androidx.recyclerview.widget.RecyclerView").scrollForward();
    }
}

function viewWebAD() {
    // 领取
    if (id("btnReceive").exists()) {
        id("btnReceive").findOne().click();
        console.log("立即领取")
        sleep(Math.floor(Math.random() * 5 + 15 + loadTime) * 1000)
        // 点击左上角退出并确认
        exitAd();
    }
    sleep(1500);
    // 红包
    // 点击红包按钮
    if (id("layout_hongbao").exists()) {
        id("layout_hongbao").findOne().click();
        sleep(1500)
        if (id("layoutHongbaoRoot").exists()) {
            console.log("马上抢")
            id("layoutHongbaoRoot").findOne().click();
            sleep(Math.floor(Math.random() * 5 + 15 + loadTime) * 1000)
            // 点击左上角退出并确认
            exitAd();
        }
    }
    sleep(1000);
    back()
}


// 退出广告
function exitAd() {
    // 广告是文章
    if (className("android.view.View").clickable(true).depth(5).exists()) {
        className("android.view.View").clickable(true).depth(5).findOne().click();
    }
    else {
    // 广告是视频
        className("android.widget.ImageView").findOne().click()
        className("android.widget.TextView").text("关闭广告").click();
    }
}