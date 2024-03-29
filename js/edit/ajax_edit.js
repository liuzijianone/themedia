$(function () {
    let linumber=0;
    //*****************************************************选项卡切换**************************************************
    $(function() {
        $(".editor-selector li").each(function(index) {
            $(this).click(function(e) {
                $(this).addClass("editor-li-show").siblings().removeClass("editor-li-show");
                linumber=$(this).index();
                $(".editing").eq(index).show().siblings(".editing").hide();
            })
        });
    });

    //******************************************************编辑器生成******************************************************/
    /*视频编辑器设计*/
    var one_E = window.wangEditor;
    /* 创建富文本编辑器*/
    var one_editor = new one_E('#editor1');
    /*div1是菜单栏 div4 是被编辑栏*/
    /*配置菜单栏*/
    one_editor.customConfig.menus = [
        'video',  // 插入视频
    ];
    one_editor.create();
    one_E.fullscreen.init('#editor1');
    /*视频编辑器设计*/


    /*爆料编辑器设计*/
    var two_E = window.wangEditor;
    /* 创建富文本编辑器*/
    var two_editor = new two_E('#editor2');
    // console.log("author:"+eAuthor);
    /*div1是菜单栏 div4 是被编辑栏*/
    /*配置菜单栏*/
    two_editor.customConfig.menus = [
        'image',  // 插入图片
        'video',  // 插入视频
    ];
    two_editor.customConfig.uploadImgServer = 'http://223.3.88.110:9001/picture';  // 上传图片到服务器
    // two_editor.customConfig.pasteIgnoreImg = true;       /*忽略粘贴内容的照片*/
    two_editor.customConfig.uploadImgShowBase64 = true;   // 使用 base64 保存图片
    two_editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;  //配置上传图片的大小 3M
    two_editor.customConfig.uploadImgMaxLength = 5;   //一次最多上传5张图片
    two_editor.customConfig.uploadImgParams = { //上传图片时可自定义传递一些参数，参数会被添加到formdata中。
        author: "123",
        file:"",
    };
    two_editor.customConfig.uploadImgParamsWithUrl = true;//需要将参数拼接到 url 中
    /*two_editor.customConfig.uploadImgHeaders = { //上传图片时刻自定义设置 header
        'Accept: application/json'
        {"type":"formData"}
    };*/
    /*two_editor.customConfig.withCredentials = true;*///跨域上传中如果需要传递 cookie 需设置 withCredentials
    two_editor.customConfig.uploadImgTimeout = 1000;//默认的 timeout 时间是 10 秒钟
    two_editor.create();
    two_E.fullscreen.init('#editor2');

    //使用监听函数在上传图片的不同阶段做相应处理
    two_editor.customConfig.uploadImgHooks = {
        // before: function (xhr, two_editor, files) {
        //     // 图片上传之前触发
        //     // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
        //     // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
        //     console.log("前奏");
        //     return {
        //         prevent: true,
        //         msg: '放弃上传'
        //     };
        //
        // },
        success: function (xhr, two_editor, result) {
            // 图片上传并返回结果，图片插入成功之后触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
            var url = result.data.url;
            console.log(JSON.stringify(url));
            editor.txt.append(url);
            console.log("成功");
        },
        fail: function (xhr, two_editor, result) {
            // 图片上传并返回结果，但图片插入错误时触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
            console.log("失败");
        },
        error: function (xhr, two_editor) {
            // 图片上传出错时触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
            console.log("错误");
        },
        // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
        // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
        // customInsert: function (insertImg, result, two_editor) {
        //     // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
        //     // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
        //     // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
        //     // var url2 = result.data[0];
        //     // insertImg(url2);
        //     console.log(result);
        //     console.log("插入图片 url = " + url2);
        //     // result 必须是一个 JSON 格式字符串！！！否则报错
        // }
    };
    /*爆料编辑器设计*/

    /*图文制作编辑器设计*/
    var three_E = window.wangEditor;
    /* 创建富文本编辑器*/
    var three_editor = new three_E('#editor3');
    /*div1是菜单栏 div4 是被编辑栏*/
    /*配置菜单栏*/
    three_editor.customConfig.menus = [
        'head',  // 标题
        'bold',  // 粗体
        'fontSize',  // 字号
        'fontName',  // 字体
        'italic',  // 斜体
        'underline',  // 下划线
        'strikeThrough',  // 删除线
        'foreColor',  // 文字颜色
        'backColor',  // 背景颜色
        'link',  // 插入链接
        'list',  // 列表
        'justify',  // 对齐方式
        'quote',  // 引用
        'emoticon',  // 表情
        'image',  // 插入图片
        'table',  // 表格
        'video',  // 插入视频
        'code',  // 插入代码
        'undo',  // 撤销
        'redo'  // 重复
    ];
    three_editor.customConfig.debug = true;
    three_editor.customConfig.pasteIgnoreImg = true;                    //忽略粘贴内容的照片
    /*three_editor.customConfig.uploadImgServer='/upload';*/            //配置服务器的地址
    three_editor.customConfig.uploadImgShowBase64 = true;               // 使用 base64 保存图片
    three_editor.customConfig.uploadImgMaxSize = 3 * 1024 * 1024;       // 将图片大小限制为 3M
    three_editor.customConfig.uploadImgMaxLength = 5;                   // 限制一次最多上传 5 张图片
    /*three_editor.customConfig.uploadFileName = '0_img';*/             // 自定义文件名
    three_editor.customConfig.uploadImgTimeout = 5000;                  // 将 timeout 时间改为 3s
    three_editor.create();
    three_E.fullscreen.init('#editor3');
    /*监听函数*/
    three_editor.customConfig.uploadImgHooks = {
        before: function (xhr, three_editor, files) {               // 图片上传之前触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，files 是选择的图片文件
            // 如果返回的结果是 {prevent: true, msg: 'xxxx'} 则表示用户放弃上传
            // return {
            //     prevent: true,
            //     msg: '放弃上传'
            // }
            // alert("前奏");
        },
        success: function (xhr, three_editor, result) {
            // 图片上传并返回结果，图片插入成功之后触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
            // var url = result.data.url;
            // alert(JSON.stringify(url));
            // editor.txt.append(url);
            // alert("成功");
        },
        fail: function (xhr, three_editor, result) {
            // 图片上传并返回结果，但图片插入错误时触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象，result 是服务器端返回的结果
            // alert("失败");
        },
        error: function (xhr, three_editor) {
            // 图片上传出错时触发
            // xhr 是 XMLHttpRequst 对象，editor 是编辑器对象
            // alert("错误");
        },
        // 如果服务器端返回的不是 {errno:0, data: [...]} 这种格式，可使用该配置
        // （但是，服务器端返回的必须是一个 JSON 格式字符串！！！否则会报错）
        customInsert: function (insertImg, result, three_editor) {
            // 图片上传并返回结果，自定义插入图片的事件（而不是编辑器自动插入图片！！！）
            // insertImg 是插入图片的函数，editor 是编辑器对象，result 是服务器端返回的结果
            // 举例：假如上传图片成功后，服务器端返回的是 {url:'....'} 这种格式，即可这样插入图片：
            var url = result.data[0];
            insertImg(url);
            // result 必须是一个 JSON 格式字符串！！！否则报错
        }
    };

    //***************************************************保存数据*****************************************************
    document.getElementById('save').addEventListener('click', function () {
        var content1="content";
        switch (linumber) {
            case 0:
                content1 = one_editor.txt.html();
                /*console.log('------------ 1etitle ----------------');
                console.log(linumber);*/
                break;
            case 1:
                content1 = two_editor.txt.html();
                /*console.log('------------ 2etitle ----------------');
                console.log(linumber);*/
                break;
            case 2:
                content1 = three_editor.txt.html();
            /*console.log('------------ 3etitle ----------------');
            console.log(linumber);*/
        }
        /* alert(content);*/
        let etitle=$(".articlebox").val();/*文章的题目*/
        let eauthor=$(".authorbox").val();/*文章的作者*/
        let elevel=$("#level").val(); /*文章等级*/
        let eId=$("#eId").val();
        let eVersion=$("#eVersion").val();
        /*console.log(etitle);
        console.log('------------ etitle ----------------');
        console.log(eauthor);
        console.log('------------ eauthor ----------------');
        console.log(content1);
        console.log('------------ content ----------------');
        console.log(elevel);
        console.log('------------ elevel ----------------');
        console.log(eId);
        console.log('------------ eId ----------------');
        console.log(eVersion);
        console.log('------------ eVersion ----------------');*/
        let article = {
            "body": content1,
            "level": elevel,
            "title": etitle,
            "id":eId,
            "version":eVersion
        };
        $.ajax({
            type: 'POST',
            url: "http://223.3.65.243:9095/article/articles",
            //前段需要将传输的数据显示转换为json
            data: JSON.stringify(article),
            // dataType:'json',
            contentType:'application/json',
            success: function (responseData) {
                // console.log( + JSON.stringify(responseData));
                console.log('SUCCESS: '+responseData);
            },
            //测试时直接带上userId的header，如实正式使用应该是token
            beforeSend:function(xhr){
                xhr.setRequestHeader("userId",6);
            },
            error: function (error) {
                console.log('ERROR', error);
            }
        });

    }, false);

    //***************************************************提交数据*****************************************************
    document.getElementById('publish').addEventListener('click', function () {
        // 读取 html
        var content2="content";
        switch (linumber) {
            case 0:
                content2 = one_editor.txt.html();
                /*console.log('------------ 1etitle ----------------');
                console.log(linumber);*/
                break;
            case 1:
                content2 = two_editor.txt.html();
                /*console.log('------------ 2etitle ----------------');
                console.log(linumber);*/
                break;
            case 2:
                content2 = three_editor.txt.html();
            /*console.log('------------ 3etitle ----------------');
            console.log(linumber);*/
        }
        /* alert(content);*/
        let etitle=$(".articlebox").val();/*文章的题目*/
        let eauthor=$(".authorbox").val();/*文章的作者*/
        let elevel=$("#level").val(); /*文章等级*/
        let eId=$("#eId").val();
        let eVersion=$("#eVersion").val();
        /*console.log(etitle);
        console.log('------------ etitle ----------------');
        console.log(eauthor);
        console.log('------------ eauthor ----------------');
        console.log(content2);
        console.log('------------ content ----------------');
        console.log(elevel);
        console.log('------------ elevel ----------------');
        console.log(eId);
        console.log('------------ eId ----------------');
        console.log(eVersion);
        console.log('------------ eVersion ----------------');*/
        let article = {
            "body": content2,
            "level": elevel,
            "title": etitle,
            "id":eId,
            "version":eVersion
        };
        $.ajax({
            type: 'POST',
            url: "http://223.3.65.243:9095/article/articles?isSubmit=1",
            //前段需要将传输的数据显示转换为json
            data: JSON.stringify(article),
            // dataType:'json',
            contentType:'application/json',
            success: function (responseData) {
                // console.log('SUCCESS: ' + JSON.stringify(responseData));
                console.log('SUCCESS: ' + responseData);
                // console.log(responseData);
            },
            //测试时直接带上userId的header，如实正式使用应该是token
            beforeSend:function(shr){
                shr.setRequestHeader("userId",6);
            },
            error: function (error) {
                console.log('ERROR', error);
            }
        });

    }, false);
});

