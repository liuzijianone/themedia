// import comments from './tmpl.js';
// const tmpl = require('tmpl');
// const { log } = console;
log(comments);
// addComment({ commentContent: '66666666' });

$(function () {

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

    // 滚到顶部
    $('.uparrow').click(function () {
        log('ok');
        // $('html , body').animate({ scrollTop: 0 }, 'slow');
        $('html , body').animate({ scrollTop: 0 }, 2000);
    });

    let serial = 0;


    // $('.comments-container').eq(0).html(commentTmpl(comments));
    $('.comments-container').eq(0).append(commentsTmpl(comments[Symbol.for('allComments')]));

    $('.comments-container').eq(1).html(commentsTmpl(comments[Symbol.for('allComments')]));

    log(typeof ($('.view-comments a')));
    log($('.view-comments a'));
    log(Object.keys($('.view-comments a')));

    for (let i of Object.keys($('.view-comments a'))) {
        $('.view-comments a').eq(i).click(() => {
            log(i);
        });
    }

    // $('.publish-btn').eq(0).bind('keypress', (event) => {
    //     if (event.keyCode === 13)
    //         $('.publish-btn').eq(0).click();
    // });

    $('.publish-btn').eq(0).click(() => {
        // log($('.comment-box textarea').eq(0).val());
        if (($('.comment-box textarea').eq(0).val()).trim() === '') {
            alert('请输入评论');
            return;
        }

        log($('.comment-box textarea').eq(0).val().replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;").replace(/\n/g, "\\n"));

        // addComment({
        //     commentContent: $('.comment-box textarea').eq(0).val().replace(/&/g, "&amp;")
        //         .replace(/</g, "&lt;")
        //         .replace(/>/g, "&gt;")
        //         .replace(/\n/g, "\\n")
        // });

        addComment({
            commentContent: safeHTML($('.comment-box textarea').eq(0).val())
        });
        // $('.comments-container').eq(0).append(
        //     commentTmpl({ commentContent: $('.comment-box textarea').eq(0).val() }));
    });

    $('.search-box input').eq(0).bind('keypress', (event) => {
        if (event.keyCode === 13)
            $('.search-box span').eq(0).click();
    });

    $('.search-box span').eq(0).click(() => {
        // window.location.href='./article_search_list.html'+'?search='+$('.search-box input').eq(0).val();
        window.location.assign('./article_search_list.html' + '?searchContent=' + encodeURI($('.search-box input').eq(0).val()));
    });

    // tailFunc();
});

function tailFunc() {
    let contentHeight = $('.main-content-box').eq(0).outerHeight() > $('.side-content-box').eq(0).outerHeight() ? $('.main-content-box').eq(0).outerHeight() : $('.side-content-box').eq(0).outerHeight();
    log('contentHeight:' + contentHeight)
    $('.content-container').eq(0).css('height', contentHeight + 'px');
    $('.content-box').eq(0).css('height', contentHeight + 'px');
}

window.onload = function () {
    tailFunc();
};



