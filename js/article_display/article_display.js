let para = {

}

$(function () {
    const { log } = console;

    // $('.main-content-box').eq(0).css('height', '1200px');
    // $('.side-content-box').eq(0).css('height', '1100px');
    $('.content-container').eq(0).css('height', $('.main-content-box').height());
    $('.content-box').eq(0).css('height', $('.content-container').outerHeight());

    log($(window).height());//浏览器显示区域（可视区域）的高度
    log($(document).height());//页面的文档高度 
    log($(document.body).height());//浏览器当前窗口文档body的高度

    log("$('.column-box').eq(1).offset().top:" + $('.column-box').eq(1).offset().top);
    threshold = $('.column-box').eq(1).offset().top;
    fixT = $('.right-fix-box').eq(0).offset().top;
    log('fixT' + fixT);

    // 滚动监听
    $(document).scroll(function () {
        let scroH = $(document).scrollTop();  //滚动高度
        // console.log(scroH);
        // let viewH = $(window).height();  //可见高度 
        // let topH = $('.top-nav-box').eq(0).height();// 导航栏高度
        // let mainH = $('.main-content-box').eq(0).height();// 左侧内容高度
        // let sideH = $('.side-content-box').eq(0).height();// 右侧边栏高度

        // $('.left-fix-box').eq(0).css('top', 500 + scroH + 'px');
        $('.right-fix-box').eq(0).css('top', 500 + scroH + 'px');

        // 顶部固定 右侧较矮
        if (scroH >= threshold) {
            $('.side-content-box').eq(0).css('top', scroH - (threshold - 5) + 'px');
        }
        else {
            $('.side-content-box').eq(0).css('top', 0 + 'px');
        }

        // 底部固定 右侧较长
        // if (scroH >= topH + sideH - viewH) {
        //     $('.side-content-box').eq(0).css('top', scroH + viewH - topH - sideH + 'px');
        // }

        // if (scroH >= topH + mainH - viewH) {
        //     $('.side-content-box').eq(0).css('top', mainH - sideH + 'px');
        // }
    });

    $('.uparrow').click(function () {
        log('ok');
        // $('html , body').animate({ scrollTop: 0 }, 'slow');
        $('html , body').animate({ scrollTop: 0 }, 2000);
    });

});

