$('div').on({
    mouseover: e => $(e.target).addClass('scale'),
    mouseout: e => $(e.target).removeClass('scale')
})