$('.box').click(e => {
    let color = $(e.target).attr('class').split(' ')[1];
    
    $('#res>p').removeClass();
    $('#res>p').addClass(color);
    $('#res>p').html('Màu bạn chọn là ' + $(e.target).text() + ': ' + $(e.target).css('backgroundColor'));

    $('#res>div').removeClass();
    $('#res>div').addClass(color);
})