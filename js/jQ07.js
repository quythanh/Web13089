$('.box').on({
    mouseover: e => {
        $(e.target).animate({
            width: $(e.target).width() * 1.5,
        })
        $(e.target).addClass('active')
    },
    mouseout: e => {
        $(e.target).animate({
            width: "20%"
        })
        $(e.target).removeClass('active')
    }
})