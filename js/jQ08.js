const rangeMove = 20;

var move = false, prevX, prevY;

const moveUp = () => {
    let top = $('.box').position().top;
    top >= rangeMove ? $('.box').css({"top": top - rangeMove}) : $('.box').css({"top": 0});
}

const moveDown = () => {
    let top = $('.box').position().top;
    let height = $(window).height() - 40;

    top <= height - rangeMove ? $('.box').css({"top": top + rangeMove}) : $('.box').css({"top": height});
}

const moveLeft = () => {
    let left = $('.box').position().left;
    left >= rangeMove ? $('.box').css({"left": left - rangeMove}) : $('.box').css({"left": 0});
}

const moveRight = () => {
    let left = $('.box').position().left;
    let width = $(window).width() - 40;

    left <= width - rangeMove ? $('.box').css({"left": left + rangeMove}) : $('.box').css({"left": width});
}

$(document).keydown(e => {
    switch (e.key) {
        case 'ArrowLeft':
        case 'A': case 'a':
            moveLeft();
            return;
        case 'ArrowRight':
        case 'D': case 'd':
            moveRight();
            return;
        case 'ArrowUp':
        case 'W': case 'w': case "Ư": case 'ư':
            moveUp();
            return;
        case "ArrowDown":
        case 'S': case 's':
            moveDown();
            return;
        default:
            return;
    }
})

$(document).ready(() => {
    $('.box').mousedown(function(e) {
        move = true;
        prevX = e.pageX - this.offsetLeft;
        prevY = e.pageY - this.offsetTop;
    });

    $('.box').mousemove(function(e) {
        if (move) {
            var curX = e.pageX - this.offsetLeft;
            var curY = e.pageY - this.offsetTop;

            var dx = curX - prevX + $(this)[0].offsetLeft;
            var dy = curY - prevY + $(this)[0].offsetTop;

            $(this).css({
                left: dx < 0 ? 0 : dx,
                top: dy < 0 ? 0 : dy,
            })
        }
    })

    $('.box').mouseup(() => move = false);
})

moveUp();
moveLeft();