function precision(x) {
    let tmp = parseInt(x);
    if (tmp - x == 0)
        return tmp;
    if (tmp == 0)
        return x.toPrecision(2);
    return x.toPrecision(3);
}

function Solve() {
    var a = document.getElementById('a').value - 0;
    var b = document.getElementById('b').value - 0;
    var c = document.getElementById('c').value - 0;
    var delta = b*b - 4*a*c;
    var ans, x;
    
    if (delta >= 0) {
        x = -(b + Math.sqrt(delta))/(2*a);
        if (delta) {
            ans = "Phương trình có 2 nghiệm là";
            ans += "<br>x1 = " + precision(x);
            ans += "<br>x2 = " + precision(-b/a - x);
        } else {
            ans = "Phương trình có nghiệm kép là";
            ans += "<br>x1 = x2 = " + precision(x);
        }
    } else
        ans = "Phương trình vô nghiệm";
    
    document.getElementById('answer').innerHTML = ans;
}

function Reset() {
    document.getElementById('a').value = '';
    document.getElementById('b').value = '';
    document.getElementById('c').value = '';

    document.getElementById('answer').innerHTML = '';
}