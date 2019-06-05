const { log } = console;

comments = {
    [Symbol.for('allComments')]:
        [
            {
                headSculptureSrc: "../imgs/article_display/scholar2.jpg",
                penName: "啊咧咧嘻",
                commentContent: 'yiyiyiyi咦，为嘛CNBC不提50年代初中国也用同样的话警告过米军？米军不听，进而爆发抗米抗米抗米援朝战争。。。不敢提吗？！😂',
                commentTime: '2019/6/5 下午7:02:08',
                likeCount: '99+',
                dislikeCount: '99+',
                commentCount: '99+',
            },
            {
                headSculptureSrc: "../imgs/article_display/scholar2.jpg",
                penName: "啊咧咧嘻1111",
                commentContent: 'yiyiyiyi咦，为嘛CNBC不提50年代初中国也用同样的话警告过米军？米军不听，进而爆发抗米抗米抗米援朝战争。。。不敢提吗？！😂',
                commentTime: '2019/6/5 下午7:05:08',
                likeCount: '22',
                dislikeCount: '99+',
                commentCount: '99+',
            }
        ]
};

const commentTmpl = ({
    headSculptureSrc = '../imgs/article_display/scholar2.jpg',
    penName = '匿名用户',
    commentContent = '',
    commentTime = (new Date()).toLocaleString(),
    likeCount = 0, dislikeCount = 0, commentCount = 0 }) => `        
            <div class="comment-card">
                <div class="comment-head">
                    <img class="head-sculpture" src=${headSculptureSrc} />
                    <a class="pen-name" href="#">${safeHTML(penName)}</a>
                    <span class="remarks">起舞弄清影</span>
                </div>
                <div class="comment-body">${safeHTML(commentContent)}
                </div>
                <div class="comment-tail">
                    <span class="comment-time">${commentTime}</span>

                    <div class="comment-btn-box">
                        <span class="view-comments"><a href="#">查看回复 ${commentCount}</a></span>
                        <span class="report"><a href="#">举报</a></span>
                        <span class="share"><a href="#">分享</a>
                            <ul class="share-box">
                                <li class="share-icon"><img src="../imgs/article_display/blog.png" />
                                </li>
                                <li class="share-icon"><img src="../imgs/article_display/QQ.png" /></li>
                                <li class="share-icon"><img src="../imgs/article_display/QQzone.png" />
                                </li>
                                <li class="share-icon"><img src="../imgs/article_display/wechat.png" />
                                </li>
                            </ul>
                        </span>
                        <span class="recomments"><a href="#">回复</a></span>
                        <span class="dislike"><a href="#">踩</a><span>${dislikeCount}</span></span>
                        <span class="like"><a href="#">赞</a><span>${likeCount}</span></span>
                    </div>
                </div>
            </div >`;

const commentsTmpl = comments => `
        ${commentProxy[Symbol.for('allComments')].map(comment =>
    commentTmpl(comment)).join('')}`;

function safeHTML(str) {
    return str.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
};

function tailFunc() {
    let contentHeight = $('.main-content-box').eq(0).outerHeight() > $('.side-content-box').eq(0).outerHeight() ? $('.main-content-box').eq(0).outerHeight() : $('.side-content-box').eq(0).outerHeight();

    $('.content-container').eq(0).css('height', contentHeight + 'px');
    $('.content-box').eq(0).css('height', contentHeight + 'px');
}

let commentProxy = new Proxy(comments, {
    set: (obj, prop, value) => {
        log('------set------');

        $('.comments-container').eq(0).append(
            commentTmpl({ commentContent: $('.comment-box textarea').eq(0).val() }));
        tailFunc();
        log('------set------');
    }
});

function addComment({
    headSculptureSrc = '../imgs/article_display/scholar2.jpg',
    penName = '匿名用户',
    commentContent = '',
    commentTime = (new Date()).toLocaleString(),
    likeCount = 0, dislikeCount = 0, commentCount = 0 }) {
    commentProxy[Symbol.for('allComments')] = commentProxy[Symbol.for('allComments')].push({
        headSculptureSrc,
        penName,
        commentContent,
        commentTime,
        likeCount, dislikeCount, commentCount
    });
}

// addComment({
//     commentContent: 'commentProxy test'
// });

// export { comments, addComment };