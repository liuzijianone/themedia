$(function () {
    loadNewsContent('24hot', NewsObjects);
    loadImgesNews('ImgsNews', ImgesObjects);
    loadLinks('LinkNews', LinksObjects);

    /*24小时热新闻*/
    function loadNewsContent(id, objects) {
        for (var i = 0; i < 4; i++) {
            $('#' + id).append('<li class="hotnews-li">' +
                '<span class="hotnews-img"><a href="' + objects[i].href + '" target="_blank"><img src="' + objects[i].src + '"></a></span>' +
                '<span class="hotnews-label"><a href="' + objects[i].href + '" target="_blank">' + objects[i].title + '</a></span>' +
                '</li>');
        }
    }

    /*精彩图片*/
    function loadImgesNews(id, objects) {
        for (var i = 0; i < 8; i++) {
            $('#' + id).append('<li class="image-li">' +
                '<span class="image-img"><a href="' + objects[i].href + '" target="_blank"><img src="' + objects[i].src + '"></a></span>' +
                '<span class="image-label"><a href="' + objects[i].href + '" target="_blank">' + objects[i].title + '</a></span>' +
                '</li>');
        }
    }

    /*友情链接*/
    function loadLinks(id, objects) {
        for (var i = 0; i < objects.length; i++) {
            $('#' + id).append('<span class="links-content"><a href="' + objects[i].href + '">' + objects[i].name + '</a></span>');
        }
    }
});