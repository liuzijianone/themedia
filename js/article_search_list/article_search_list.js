
$(function () {
    init();

    let searchParams = getParams(decodeURI(window.location.href));
    $('.search-box input').eq(0).val(searchParams['searchContent']);
    // $('.search-box input').eq(0).val(safeHTML(searchParams['searchContent']));

    // let requestParams = {
    //     "content": "文章",
    //     "item": 2,
    //     "current_page": 1
    // };

    $.ajax({
        type: 'GET',
        url: articleSearchTestTmpl(searchParams['searchContent'], 10, 1),
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

    $('.search-box input').eq(0).bind('keypress', (event) => {
        if (event.keyCode === 13)
            // $('.search-box span').eq(0).click();
            doSearch($('.search-box input').eq(0).val());
    });

    $('.search-box span').eq(0).click(() => {
        // window.location.href='./article_search_list.html'+'?search='+$('.search-box input').eq(0).val();
        // window.location.assign('./article_search_list.html' + '?searchContent=' + encodeURI($('.search-box input').eq(0).val()));
        doSearch($('.search-box input').eq(0).val());
    });

});

function init() {
    console.log($('.field-label').length);
    fieldFlag = new Array($('.field-label').length).fill(false);
    searchUrlTmpls = new Array($('.field-label').length).fill('');
    fieldFlag[1] = true;
    preField = 1;
    searchUrlTmpls[1] = articleSearchTestTmpl;
    searchUrlTmpls[2] = videoSearchTestTmpl;

    fieldLabelStyle();

    for (let i in $('.field-label')) {
        $('.field-label').eq(i).mouseenter(() => {
            $('.field-label').eq(i).css('color', '#fff');
            $('.field-label').eq(i).css('background-color', 'brown');
        });
        $('.field-label').eq(i).mouseout(() => {
            if (!fieldFlag[i]) {
                $('.field-label').eq(i).css('color', 'brown');
                $('.field-label').eq(i).css('background-color', '#fff');
            }
        });
        $('.field-label').eq(i).click(() => {
            fieldFlag[i] = true;
            fieldFlag[preField] = false;
            preField = i;
            console.log(fieldFlag);
            fieldLabelStyle();
            doSearch($('.search-box input').eq(0).val());
        });
    }
}

function fieldLabelStyle() {
    // for (let i of fieldFlag) { //of 是值
    for (let i in fieldFlag) { // in 是索引
        if (fieldFlag[i]) {
            $('.field-label').eq(i).css('color', '#fff');
            $('.field-label').eq(i).css('background-color', 'brown');
        } else {
            $('.field-label').eq(i).css('color', 'brown');
            $('.field-label').eq(i).css('background-color', '#fff');
        }
    }
}

function doSearch(content) {
    $.ajax({
        type: 'GET',
        url: searchUrlTmpls[preField](content, 10, 1),
        // data: requestParams,
        //dataType: 'json', //# 注意：这里是指服务端返回json格式的数据
        success: function (responseData) {
            console.log('SUCCESS: ' + JSON.stringify(responseData));
            console.log(responseData);
            // log(responseData['data'].length);
            // log(responseData[])

            $('.main-column-label span').eq(0).html(responseData['data'].length);
            setColumnCards(responseData['data']);

        },
        error: function (error) {
            console.error('ERROR', error);
        }
    });
}

// function getParams(url) {
//     let res = {};
//     let params = url.split('?')[1].split('=');
//     for (let [i, p] of params.entries()) {
//         if (i % 2 === 0) {
//             res[p] = params[i + 1];
//         }
//     }
//     return res;
// }
