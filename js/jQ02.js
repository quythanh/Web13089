const isLeapYear = year =>  year % 400 ? year % 100 ? year % 4 ? false : true : false : true;

const gap = (from, to) => {
    let daysGap = 0;
    while (from[0] < to[0])
        daysGap += isLeapYear(to[0]--) ? 366 : 365;

    while (from[1] < to[1])
        switch (--to[1]) {
            case 1: case 3: case 5: case 7:
            case 8: case 10: case 12:
                daysGap += 31;
                break;
            
            case 4: case 6: case 9: case 11:
                daysGap += 30;
                break;
            
            default:
                daysGap += isLeapYear(to[0]) ? 29 : 28;
                break;
        }

    if (from[1] == to[1] && from[2] <= to[2])
        return daysGap + (to[2] - from[2]);
    return daysGap - gap(to, from);
}

$('form').submit(e => {
    e.preventDefault();
    let from = this['from'].value.split('-').map(e => e-0);
    let to = this['to'].value.split('-').map(e => e-0);

    console.log(from, to);

    if (from[0] > to[0]) {
        $('#res').html('<h3 style="color:red">Ngày không hợp lệ!</h3>');
        return;
    }
    if (from[0] == to[0] && from[1] > to[1]) {
        $('#res').html('<h3 style="color:red">Ngày không hợp lệ!</h3>');
        return;
    }
    if (from[0] == to[0] && from[1] == to[1] && from[2] > to[2]) {
        $('#res').html('<h3 style="color:red">Ngày không hợp lệ!</h3>');
        return;
    }

    $('#res').html('Số ngày là: ' + gap(from, to));
})