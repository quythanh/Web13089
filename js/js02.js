var inp_month = prompt('Nhập tháng', 2) - 0;
var inp_year = prompt('Nhập năm', 2000) - 0;

function getDays(month, year) {
    switch (month) {        
        case 11: case 9:
        case 6: case 4:
            return 30;
        
        case 2:
            return year % 400 ? year % 100 ? year % 4 ? 28 : 29 : 28 : 29;
        
        default:
            return 31;
    }
}
document.getElementById('inp_date').innerHTML = "Tháng " + inp_month + " năm " + inp_year + " có " + getDays(inp_month, inp_year) + " ngày";

const days = ["chủ nhật", "thứ hai", "thứ ba", "thứ tư", "thứ năm", "thứ sáu", "thứ bảy"];

function showCurDate() {
    var dt = new Date;
    var message = "Hôm nay, " + days[dt.getDay()];
    message += " ngày " + dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear();
    message += "<br>" + dt.toLocaleTimeString('vi-VN', { hour12: false });
    
    document.getElementById('cur_date').innerHTML = message;
}