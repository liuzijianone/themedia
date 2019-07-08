// import comments from './tmpl.js';
// const tmpl = require('tmpl');
// const { log } = console;
log(comments);
// addComment({ commentContent: '66666666' });

$(function () {
    // $('.content-container').eq(0).css('height', $('.main-content-box').height());
    // $('.content-box').eq(0).css('height', $('.content-container').outerHeight());

    // log($(window).height());//浏览器显示区域（可视区域）的高度
    // log($(document).height());//页面的文档高度 
    // log($(document.body).height());//浏览器当前窗口文档body的高度

    // log("$('.column-box').eq(1).offset().top:" + $('.column-box').eq(1).offset().top);
    threshold = $('.column-box').eq(1).offset().top;
    // fixT = $('.right-fix-box').eq(0).offset().top;
    // log('fixT' + fixT);

    // 滚动监听
    $(document).scroll(function () {
        let scroH = $(document).scrollTop();  //滚动高度
        // console.log(scroH);
        // let viewH = $(window).height();  //可见高度 
        // let topH = $('.top-nav-box').eq(0).height();// 导航栏高度
        // let mainH = $('.main-content-box').eq(0).height();// 左侧内容高度
        // let sideH = $('.side-content-box').eq(0).height();// 右侧边栏高度

        // $('.left-fix-box').eq(0).css('top', 500 + scroH + 'px');
        // $('.right-fix-box').eq(0).css('top', 500 + scroH + 'px');

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
        $('html , body').animate({ scrollTop: 0 }, 800);
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

    log('document.domain:' + document.domain);
    $.ajax({
        type: 'GET',
        url: articleDetail,
        // data: requestParams,
        // dataType: 'jsonp', //# 注意：这里是指服务端返回json格式的数据
        success: function (responseData) {
            console.log('SUCCESS: ' + JSON.stringify(responseData));
            console.log(responseData);
            log(responseData['data'].length);

            articleProxy['articleDesc'] = {
                articleTitle: responseData.data.title,
                authorImg: "../imgs/article_display/scholar2.jpg",
                authorName: {
                    'link': '#',
                    'name': '苏轼'
                },
                collectCount: 12,
                commentCount: 122,
                articleTime: "2019-05-30 08:25:42",
                articleSource: responseData.data.source,
                keywords: responseData.data.keywords.split(';'),
                articleLabel: [{
                    'src': '#',
                    'label': '贸易战'
                }, {
                    'src': '#',
                    'label': '中美关系'
                }],
                reprintLink: 'https://chengchanghu.github.io/themedia/html/article_display.html',
                editor: '二麻子'
            };

            articleProxy['articleContent'] = {
                content: `<p class="word-p">
                                ${responseData.data.body}
                            </p>
                            <p class="img-p">
                                <img src="../imgs/article_display/nj1.jpg" />
                                <span>南京眼</span>
                            </p>
                            <p class="word-p">
                                它是世界上最大的专业技术组织之一，
                                是跟“电”相关的最主要的一个协会了，全称是电气电子工程师学会，
                                涉及领域包括计算机、电子、电力、自动化等等，反正就是跟电相关的，
                                跟信息相关的一个组织。然后，它旗下有很多期刊，我们所知道的跟电相关的最主要的期刊应该都在这里边。
                            </p>`
            };

        },
        error: function (error) {
            console.log('ERROR', error);
        }
    });

    articleProxy['articleDesc'] = {
        articleTitle: "特朗普把“勿谓言之不预”放头条了全球顶级技术学会IEEE封杀华为？我们采访到一位内部人士",
        authorImg: "../imgs/article_display/scholar2.jpg",
        authorName: {
            'link': '#',
            'name': '苏轼'
        },
        collectCount: 12,
        commentCount: 122,
        articleTime: "2019-05-30 08:25:42",
        articleSource: "智库",
        keywords: ['勿谓言之不预', '勿谓言之不预'],
        articleLabel: [{
            'src': '#',
            'label': '贸易战'
        }, {
            'src': '#',
            'label': '中美关系'
        }],
        reprintLink: 'https://chengchanghu.github.io/themedia/html/article_display.html',
        editor: '二麻子'
    };

    articleProxy['articleContent'] = {
        content: `<p class="word-p">
                        南京它是世界上最大的专业技术组织之一，
                        是跟“电”相关的最主要的一个协会了，全称是电气电子工程师学会，
                        涉及领域包括计算机、电子、电力、自动化等等，反正就是跟电相关的，
                        跟信息相关的一个组织。然后，它旗下有很多期刊，我们所知道的跟电相关的最主要的期刊应该都在这里边。
                    </p>
                    <p class="img-p">
                        <img src="../imgs/article_display/nj1.jpg" />
                        <span>南京眼</span>
                    </p>
                    <p class="word-p">
                        它是世界上最大的专业技术组织之一，
                        是跟“电”相关的最主要的一个协会了，全称是电气电子工程师学会，
                        涉及领域包括计算机、电子、电力、自动化等等，反正就是跟电相关的，
                        跟信息相关的一个组织。然后，它旗下有很多期刊，我们所知道的跟电相关的最主要的期刊应该都在这里边。
                    </p>`
    };

    console.log(window.location);

    for (let i = 0; i < 10; i++) {
        $('.share-btn').eq(i).click((e) => {

            share(i, articleProxy['articleDesc'].articleTitle, window.location.href, '');
            // sharetosina(articleProxy['articleDesc'].articleTitle, window.location.href, '');
        });
    }

});



