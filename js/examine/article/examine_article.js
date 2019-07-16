$(() => {
    // $('#popup-btn').click();
    console.log($('.card .btn').length);
    for (let i = 0; i < $('.card .btn').length; i++) {
        $('.card .btn').eq(i).click(() => {
            console.log(i);
            
        });
    }
});