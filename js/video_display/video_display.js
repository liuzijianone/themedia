$(() => {
    $('.good-box img').eq(0).hover(() => {
        $('.good-box img').eq(0).attr('src', '../imgs/video_display/good2.png');
        $('.good-count').eq(0).css('color', '#1296DB');
    }, () => {
        $('.good-box img').eq(0).attr('src', '../imgs/video_display/good1.png');
        $('.good-count').eq(0).css('color', '#999');
    });

    $('.money-box img').eq(0).hover(() => {
        $('.money-box img').eq(0).attr('src', '../imgs/video_display/money2.png');
        $('.money-count').eq(0).css('color', '#DEC171');
    }, () => {
        $('.money-box img').eq(0).attr('src', '../imgs/video_display/money1.png');
        $('.money-count').eq(0).css('color', '#999');
    });

    $('.report-box img').eq(0).hover(() => {
        $('.report-box img').eq(0).attr('src', '../imgs/video_display/report2.png');
    }, () => {
        $('.report-box img').eq(0).attr('src', '../imgs/video_display/report1.png');
    });
}); 