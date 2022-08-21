const moveUp = () => {
    $('.box').animate({
        "top": '0'
    });
}

const moveDown = () => {
    $('.box').animate({
        "top": $('.box').parent().height() - 40
    });
}

const moveLeft = () => {
    $('.box').animate({
        "left": '0'
    });
}

const moveRight = e => {
    $('.box').animate({
        "left": $('.box').parent().width() - 40
    });
}

// up
$('.controls button:eq(0)').click(moveUp);

// left
$('.controls button:eq(1)').click(moveLeft);

// right
$('.controls button:eq(2)').click(moveRight);

//down
$('.controls button:eq(3)').click(moveDown);

moveUp();
moveLeft();