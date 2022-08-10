function showResult() {
    var uname = document.getElementById('name').value;
    var year = document.getElementById('year').value;
    var dt = new Date;
    
    if (year <= 1900 || year > dt.getFullYear()) {
        document.getElementById('result').innerHTML = "Năm sinh không hợp lệ";
        return;
    }
    
    var result = "Chào bạn " + uname + "!<br>Tuổi của bạn là " + (dt.getFullYear() - year);
    document.getElementById('result').innerHTML = result;
}