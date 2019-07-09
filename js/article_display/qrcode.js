$(() => {
    console.log(window.location.href);
    console.log(getParams(window.location.href));

    var path = "https://chengchanghu.github.io/idea/";

    $("#qrcode").qrcode({
        text: path, //设置二维码内容 
        render: "table", //设置渲染方式 
        width: 256, //设置宽度,默认生成的二维码大小是 256×256
        height: 256, //设置高度 
        typeNumber: -1, //计算模式 
        background: "#ffffff", //背景颜色 
        foreground: "#000000" //前景颜色 
    });
});

// file:///C:/Users/c/Desktop/%E5%85%A8%E5%AA%92%E4%BD%93%E9%A1%B9%E7%9B%AE/%E4%BB%A3%E7%A0%81/themedia/html/qrcode.html
// ?title=%E7%89%B9%E6%9C%97%E6%99%AE%E6%8A%8A%E2%80%9C%E5%8B%BF%E8%B0%93%E8%A8%80%E4%B9%8B%E4%B8%8D%E9%A2%84%E2%80%9D%E6%94%BE%E5%A4%B4%E6%9D%A1%E4%BA%86%E5%85%A8%E7%90%83%E9%A1%B6%E7%BA%A7%E6%8A%80%E6%9C%AF%E5%AD%A6%E4%BC%9AIEEE%E5%B0%81%E6%9D%80%E5%8D%8E%E4%B8%BA%EF%BC%9F%E6%88%91%E4%BB%AC%E9%87%87%E8%AE%BF%E5%88%B0%E4%B8%80%E4%BD%8D%E5%86%85%E9%83%A8%E4%BA%BA%E5%A3%AB
// &url=file:///C:/Users/c/Desktop/%E5%85%A8%E5%AA%92%E4%BD%93%E9%A1%B9%E7%9B%AE/%E4%BB%A3%E7%A0%81/themedia/html/article_display.html
// &picurl=