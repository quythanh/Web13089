var firstS1;
var s1 = document.querySelector('#s1');
var s2 = document.querySelector('#s2');
var s3 = document.querySelector('#s3');
var pos = document.querySelector('#pos').value - 0;

const ChuanHoaChuoi = () => {
    firstS1 = firstS1 ? firstS1 : s1.value;

    let tmp = s1.value.split(" ").map(e => {
        e = e.toLowerCase();
        return e.charAt(0).toUpperCase() + e.slice(1);
    }).filter(e => e != '');
    s1.value = tmp.join(' ');
}

const DaoChuoi = () => {
    firstS1 = firstS1 ? firstS1 : s1.value;
    s1.value = s1.value.split(' ').reverse().join(' ');
}

const KhoiPhuc = () => {
    firstS1 = firstS1 ? firstS1 : s1.value;
    s1.value = firstS1;
}

const ThayThe = () => {
    firstS1 = firstS1 ? firstS1 : s1.value;
    let reg = new RegExp(s2.value, "ig");
    s1.value = s1.value.replace(reg, s3.value);
}

const Chen = () => {
    firstS1 = firstS1 ? firstS1 : s1.value;
    s1.value = s1.value.slice(0, pos) + s2.value + s1.value.slice(pos);
}

const Xoa = () => {
    firstS1 = firstS1 ? firstS1 : s1.value;
    let reg = new RegExp(s2.value, "ig");
    s1.value = s1.value.replace(reg, '');
}