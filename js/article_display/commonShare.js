var share = function (i, title, url, picurl) {
    switch (i % 5) {
        case 0:
            sharetosina(title, url, picurl);
            break;
        case 1:
            sharetoqq(title, url, picurl);
            break;
        case 2:
            sharetoqqzone(title, url, picurl);
            break;
        case 3:
            sharetowechat(title, url, picurl);
            break;
    }
}

// ShareTip.prototype.sharetosina = function (title, url, picurl) {
//     var sharesinastring = 'http://v.t.sina.com.cn/share/share.php?title=' + title + '&url=' + url + '&content=utf-8&sourceUrl=' + url + '&pic=' + picurl;
//     window.open(sharesinastring, 'newwindow', 'height=400,width=400,top=100,left=100');
// }

function sharetosina(title, url, picurl) {
    let sharesinastring = 'http://v.t.sina.com.cn/share/share.php?title=' + title + '&url=' + url + '&content=utf-8&sourceUrl=' + url + '&pic=' + picurl;
    window.open(sharesinastring, 'newwindow', 'height=400,width=400,top=100,left=100');
}

function sharetoqqzone(title, url, picurl) {
    let shareqqzonestring = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=' + title + '&url=' + url + '&pics=' + picurl;
    window.open(shareqqzonestring, 'newwindow', 'height=400,width=400,top=100,left=100');
}

function sharetoqq(title, url, picurl) {
    let shareqqstring = 'https://connect.qq.com/widget/shareqq/index.html?url=' + url + '&showcount=0&desc={content}&summary=&title=' + title + '&pics=&style=203&width=19&height=22';
    window.open(shareqqstring, 'newwindow', 'height=400,width=400,top=100,left=100');
}

function sharetowechat(title, url, picurl) {
    window.open('../html/qrcode.html?title=' + title + '&url=' + url + '&picurl=' + picurl, 'newwindow', 'height=400,width=400,top=100,left=100');
}

function sharetocopboard(url) {
    let urlBox = document.createElement('input');
    urlBox.id = 'urlshare';
    urlBox.value = url;
    $('body').append(urlBox);
    urlBox.select();

    alert("复制链接成功！");
}

document.addEventListener('copy', function (e) {
    e.clipboardData.setData('text/plain', '版权所有');
    e.preventDefault(); // We want our data, not data from any selection, to be written to the clipboard
});
