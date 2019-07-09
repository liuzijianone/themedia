function getParams(url) {
    let res = {};
    let params = url.split('?')[1].split('&');
    // for (let [i, p] of params.entries()) {
    //     if (i % 2 === 0) {
    //         res[p] = params[i + 1];
    //     }
    // }

    for (let pair of params) {
        res[pair.split('=')[0]] = pair.split('=')[1]
    }
    return res;
}