const { log } = console;

columnCards = {
    [Symbol.for('allColumnCards')]:
        [
            {
                imgSrc: '../imgs/article_display/gg.gif',
                title: '无题',
                time: (new Date()).toLocaleString(),
                source: '观察动物网'
            },
            {
                imgSrc: '../imgs/article_display/news11.jpg',
                title: '无题',
                time: (new Date()).toLocaleString(),
                source: '观察动物网'
            }
        ]
};

const mainColumnCardTmpl = ({
    imgSrc = '../imgs/article_display/news11.jpg',
    title = '无题',
    time = (new Date()).toLocaleString(),
    source = '观察动物网' }) => `
        <div class="main-column-card">
            <img class='main-column-img' src='${imgSrc}' />
            <div class="main-column-container">
                <span class="main-column-title"><a href="#">${title}</a></span>
                <span class="main-column-tail">
                    <span class="main-column-time">${time}</span>
                    <span class="main-column-source"><a href="#">${source}</a></span>
                </span>
            </div>
        </div>`;

let columnCardsProxy = new Proxy(columnCards, {
    get: (target, property) => {
        if (property in target) {
            return target[property];
        }
    },
    set: (obj, prop, value) => {
        log(obj);
        log(prop);
        log(value);

        obj[prop] = value;
        $('.main-column-box').eq(0).html(mainColumnCardsTmpl(obj[prop]));
    }
});

// const mainColumnCardsTmpl = () => `
//         ${columnCardsProxy[Symbol.for('allColumnCards')].map(card =>
//     mainColumnCardTmpl(card)).join('')}`;

const mainColumnCardsTmpl = (objs) => `
        ${objs.map((card) => mainColumnCardTmpl({
    imgSrc: card.img_url ? card.img_url : undefined,
    title: card.title,
    // time: new Date(card.time).toLocaleDateString().replace(/\//g, '-') + " " + new Date(card.time).toTimeString().substring(0, 8),
    time: card.create_time,
    source: card.source ? card.source : undefined
})).join('')}`;

// function addColumnCard({
//     imgSrc = '../imgs/article_display/gg.gif',
//     title = '无题',
//     time = (new Date()).toLocaleString(),
//     source = '观察动物网' }) {
//     columnCardsProxy[Symbol.for('allColumnCards')] = columnCardsProxy[Symbol.for('allComments')].push({
//         imgSrc, title, time, source
//     });
// }

function setColumnCards(objects) {
    log('-----------------------------------------')
    log(objects);
    columnCardsProxy[Symbol.for('allColumnCards')] = objects;
}

function safeHTML(str) {
    return str.replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/\n/g, "<br>");
};

