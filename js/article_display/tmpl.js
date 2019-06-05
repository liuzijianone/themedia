comments = [
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
];

function addComment({
    headSculptureSrc = '../imgs/article_display/scholar2.jpg',
    penName = '匿名用户',
    commentContent = '',
    commentTime = (new Date()).toLocaleString(),
    likeCount = 0, dislikeCount = 0, commentCount = 0 }) {
    comments.push([{
        headSculptureSrc,
        penName,
        commentContent,
        commentTime,
        likeCount, dislikeCount, commentCount
    }]);
}

export { comments, addComment };