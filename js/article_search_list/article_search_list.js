
$(function () {
    // log(window.location.pathname);
    // log(window.location.href);
    // log(decodeURI(window.location.href));
    // log(getParams(decodeURI(window.location.href)));

    let searchParams = getParams(decodeURI(window.location.href));
    $('.search-box input').eq(0).val(searchParams['searchContent']);
    // $('.search-box input').eq(0).val(safeHTML(searchParams['searchContent']));

    // getJSON("http://223.3.65.243:9095/search/search/article/key_word").then(function (response) {
    //     console.log('SUCCESS: ' + response);
    // }, function (error) {
    //     console.error('ERROR', error);
    // });
    let requestParams = {
        "content": "文章",
        "item": 2,
        "current_page": 1
    };
    $.ajax({
        type: 'GET',
        url: "http://223.3.84.128:8000/article/?content=测试&item=2&current_page=1",
        // data: requestParams,
        //dataType: 'json', //# 注意：这里是指服务端返回json格式的数据
        success: function (responseData) {
            console.log('SUCCESS: ' + JSON.stringify(responseData));
            console.log(responseData);
            log(responseData['data'].length);

            $('.main-column-label span').eq(0).html(responseData['data'].length);
            setColumnCards(responseData['data']);

        },
        error: function (error) {
            console.error('ERROR', error);
        }
    });

    // $('.main-column-box').eq(0).append(mainColumnCardsTmpl());

    // log(mainColumnCardsTmpl());   

});

function getParams(url) {
    let res = {};
    let params = url.split('?')[1].split('=');
    for (let [i, p] of params.entries()) {
        if (i % 2 === 0) {
            res[p] = params[i + 1];
        }
    }
    return res;
}
