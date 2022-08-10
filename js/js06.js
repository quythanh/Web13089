const myForm = document.forms[0];

const CalcAge = date => {
    let dt = new Date;
    let sp = date.split('-');
    let y = sp[0] - 0,
        m = sp[1] - 1,
        d = sp[2] - 0;
    if (dt.getFullYear() > y) {
        if (dt.getMonth() > m || (dt.getMonth() == m && dt.getDate() >= d))
            return dt.getFullYear() - y;
        return dt.getFullYear() - y - 1;
    }
    return 0;
}

myForm.addEventListener('submit', e => {
    e.preventDefault();

    document.querySelector('#msg').innerHTML = `Chào mừng ${myForm['username'].value}
Bạn là ${myForm['gender'].value}
Mật khẩu của bạn có ${myForm['pwd'].value.length} ký tự
Tuổi của bạn là ${CalcAge(myForm['birthday'].value)}
Vấn đề bạn quan tâm là ${myForm['interest'].value}`
})