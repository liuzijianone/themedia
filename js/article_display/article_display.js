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

    // 滚到顶部
    $('.uparrow').click(function () {
        log('ok');
        // $('html , body').animate({ scrollTop: 0 }, 'slow');
        $('html , body').animate({ scrollTop: 0 }, 2000);
    });

    const commentTmpl = comments => `
        ${comments.map(comment => `
            <div class="comment-card">
                <div class="comment-head">
                    <img class="head-sculpture" src=${comment.headSculptureSrc} />
                    <a class="pen-name" href="#">${comment.penName}</a>
                    <span class="remarks">起舞弄清影</span>
                </div>
                <div class="comment-body">${comment.commentContent}
                </div>
                <div class="comment-tail">
                    <span class="comment-time">${comment.commentTime}</span>

                    <span class="like"><a href="#">赞</a><span>${comment.likeCount}</span></span>
                    <span class="dislike"><a href="#">踩</a><span>${comment.dislikeCount}</span></span>
                    <span class="recomments"><a href="#">回复</a></span>
                    <span class="share"><a href="#">分享</a>
                        <ul class="share-box">
                            <li class="share-icon"><img src="../imgs/article_display/blog.png" /></li>
                            <li class="share-icon"><img src="../imgs/article_display/QQ.png" /></li>
                            <li class="share-icon"><img src="../imgs/article_display/QQzone.png" /></li>
                            <li class="share-icon"><img src="../imgs/article_display/wechat.png" /></li>
                        </ul>
                    </span>
                    <span class="report"><a href="#">举报</a></span>
                    <span class="view-comments"><a href="#">查看回复 ${comment.commentCount}</a></span>
                </div>
            </div >`).join('')}`;

    $('.comments-container').eq(0).html(commentTmpl([
        {
            headSculptureSrc: "../imgs/article_display/scholar2.jpg",
            penName: "啊咧咧嘻",
            commentContent: 'yiyiyiyi咦，为嘛CNBC不提50年代初中国也用同样的话警告过米军？米军不听，进而爆发抗米抗米抗米援朝战争。。。不敢提吗？！😂',
            commentTime: '1小时前',
            likeCount: '99+',
            dislikeCount: '99+',
            commentCount: '99+',
        },
        {
            headSculptureSrc: "../imgs/article_display/scholar2.jpg",
            penName: "啊咧咧嘻1111",
            commentContent: 'yiyiyiyi咦，为嘛CNBC不提50年代初中国也用同样的话警告过米军？米军不听，进而爆发抗米抗米抗米援朝战争。。。不敢提吗？！😂',
            commentTime: '4小时前',
            likeCount: '22',
            dislikeCount: '99+',
            commentCount: '99+',
        }
    ]));

    $('.comments-container').eq(1).html(commentTmpl([
        {
            headSculptureSrc: "../imgs/article_display/scholar2.jpg",
            penName: "啊咧咧嘻",
            commentContent: 'yiyiyiyi咦，为嘛CNBC不提50年代初中国也用同样的话警告过米军？米军不听，进而爆发抗米抗米抗米援朝战争。。。不敢提吗？！😂',
            commentTime: '1小时前',
            likeCount: '99+',
            dislikeCount: '99+',
            commentCount: '99+',
        },
        {
            headSculptureSrc: "../imgs/article_display/scholar2.jpg",
            penName: "啊咧咧嘻1111",
            commentContent: 'yiyiyiyi咦，为嘛CNBC不提50年代初中国也用同样的话警告过米军？米军不听，进而爆发抗米抗米抗米援朝战争。。。不敢提吗？！😂',
            commentTime: '4小时前',
            likeCount: '22',
            dislikeCount: '99+',
            commentCount: '99+',
        }
    ]));

    tailFunc();

});

function tailFunc() {
    let contentHeight = $('.main-content-box').eq(0).outerHeight() > $('.side-content-box').eq(0).outerHeight() ? $('.main-content-box').eq(0).outerHeight() : $('.side-content-box').eq(0).outerHeight();

    $('.content-container').eq(0).css('height', contentHeight + 'px');
    $('.content-box').eq(0).css('height', contentHeight + 'px');
}

function loadComments() {
    let headSculptureSrc = "../imgs/article_display/scholar2.jpg";
    let penName = "啊咧咧嘻";
    let commentContent = 'yiyiyiyi咦，为嘛CNBC不提50年代初中国也用同样的话警告过米军？米军不听，进而爆发抗米抗米抗米援朝战争。。。不敢提吗？！😂';
    let commentTime = '1小时前';
    let likeCount = '99+';
    let dislikeCount = '99+';
    let commentCount = '99+';
    $('.comments-container').eq(0).append(
        `<div class="comment-card">
        <div class="comment-head">
            <img class="head-sculpture" src=${headSculptureSrc} />
            <a class="pen-name" href="#">${penName}</a>
            <span class="remarks">起舞弄清影</span>
        </div>
        <div class="comment-body">${commentContent}
        </div>
        <div class="comment-tail">
            <span class="comment-time">${commentTime}</span>

            <span class="like"><a href="#">赞</a><span>${likeCount}</span></span>
            <span class="dislike"><a href="#">踩</a><span>${dislikeCount}</span></span>
            <span class="recomments"><a href="#">回复</a></span>
            <span class="share"><a href="#">分享</a>
                <ul class="share-box">
                    <li class="share-icon"><img src="../imgs/article_display/blog.png" /></li>
                    <li class="share-icon"><img src="../imgs/article_display/QQ.png" /></li>
                    <li class="share-icon"><img src="../imgs/article_display/QQzone.png" /></li>
                    <li class="share-icon"><img src="../imgs/article_display/wechat.png" /></li>
                </ul>
            </span>
            <span class="report"><a href="#">举报</a></span>
            <span class="view-comments"><a href="#">查看回复 ${commentCount}</a></span>
        </div>

    </div>`
    );
}

