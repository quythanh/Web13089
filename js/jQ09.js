var tmp = [];
const res = $('#res');

const addEv = () => {
    $('li').click(function() {
        res.html($(this).text())
    })
}

const DeleteLast = () => {   
    let e = $('li:last-child');
    if (e.text() === '')
        return;
    tmp.push(e.text());
    e.remove();
}

const Restore = () => {
    if (!tmp.length)
        return;
    $('ol').append(`<li>${tmp.pop()}</li>`);
    addEv();
}

$('input[name="shadow"]').click(function() {
    if ($(this).val() === '1')
        res.css('textShadow', "#666 3px 3px 6px");
    else
        res.css('textShadow', '');
})

$('input[name="color"]').change(function() {
    res.css('color', $(this).val())
})
addEv();