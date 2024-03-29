// let article = {
//     'articleContent': {
//         content: `<p class="word-p">&nbsp;&nbsp;&nbsp;&nbsp;
//                     北京它是世界上最大的专业技术组织之一，
//                     是跟“电”相关的最主要的一个协会了，全称是电气电子工程师学会，
//                     涉及领域包括计算机、电子、电力、自动化等等，反正就是跟电相关的，
//                     跟信息相关的一个组织。然后，它旗下有很多期刊，我们所知道的跟电相关的最主要的期刊应该都在这里边。
//                 </p>
//                 <p class="img-p">
//                     <img src="../imgs/article_display/nj1.jpg" />
//                     <span>南京眼1111</span>
//                 </p>
//                 <p class="word-p">&nbsp;&nbsp;&nbsp;&nbsp;
//                     它是世界上最大的专业技术组织之一，
//                     是跟“电”相关的最主要的一个协会了，全称是电气电子工程师学会，
//                     涉及领域包括计算机、电子、电力、自动化等等，反正就是跟电相关的，
//                     跟信息相关的一个组织。然后，它旗下有很多期刊，我们所知道的跟电相关的最主要的期刊应该都在这里边。
//                 </p>`
//     },
//     'articleDesc': {
//         articleTitle: "美媒把“勿谓言之不预”放头条了全球顶级技术学会IEEE封杀华为？我们采访到一位内部人士",
//         authorImg: "../imgs/article_display/scholar2.jpg",
//         authorName: {
//             'link': '#',
//             'name': '苏轼'
//         },
//         collectCount: 12,
//         commentCount: 122,
//         articleTime: "2019-05-30 08:25:42",
//         articleSource: "智库",
//         keywords: ['勿谓言之不预', '勿谓言之不预'],
//         articleLabel: [{
//             'src': '#',
//             'label': '贸易战'
//         }, {
//             'src': '#',
//             'label': '中美关系'
//         }],
//         reprintLink: 'https://chengchanghu.github.io/themedia/html/article_display.html',
//         editor: '二麻子'

//     }
// }

let article = {};

let authorLinkTmpl = (author) => `<a href="${author['link']}">${author['name']}</a>`;
let keywordTmpl = (keyword) => `<li>${keyword}</li>`;
let keywordsTmpl = (keywords) => `${keywords.map(k => keywordTmpl(k)).join('\t')}`;
let articleLabelTmpl = (label) => `<a href="${label['src']}">${label['label']}</a>`;
let articleLabelsTmpl = (labels) => `<span>标签</span>\t${labels.map(l => articleLabelTmpl(l)).join('\t')}`;

// log(keywordTmpl('jkjkjkjkj'));
// log(keywordsTmpl(['jkjkjkjkj', 'jkjkjk12', 'jkj322323']));

let articleProxy = new Proxy(article, {
    set: function (target, propKey, value, receiver) {
        log('--------------------------SET---------------------------');
        log('obj:' + target);
        log('propkey:' + propKey);
        log('value:' + value);
        log(receiver);
        // print()会造成打印

        target[propKey] = value;
        switch (propKey) {
            case 'articleDesc':
                log('DESC');
                $('.article-title').eq(0).html(target.articleDesc.articleTitle);
                $('.author-img').eq(0).attr('arc', target.articleDesc.authorImg);
                $('.author-name-box').eq(0).html(authorLinkTmpl(target.articleDesc.authorName));
                $('.collectCount').html(target.articleDesc.collectCount);
                $('.commentCount').html(target.articleDesc.commentCount);
                $('.article-time').eq(0).html(target.articleDesc.articleTime);
                $('.article-source').eq(0).html(target.articleDesc.articleSource);
                $('.keywords').eq(0).html(keywordsTmpl(target.articleDesc.keywords));
                $('.article-label-box').eq(0).html(articleLabelsTmpl(target.articleDesc.articleLabel));
                $('.reprint-link').eq(0).html(target.articleDesc.reprintLink);
                $('.reprint-link').eq(0).attr('href', target.articleDesc.reprintLink);
                $('.editor').eq(0).html('责任编辑：' + target.articleDesc.editor);

                break;

            case 'articleContent':
                log('CONTENT');
                $('.article-body-box').eq(0).html(target.articleContent.content);
                break;
        }


        log('---------------------------SET--------------------------');
    }
});

