var arr;

const Generate = () => {
    arr = [];
    let n = document.querySelector('#inp').value - 0;
    for (let i = 0; i < n; i++)
        arr.push(Math.round(Math.random() * 49))
    document.querySelector('#arr').innerHTML = "Mảng ban đầu:  " + arr.join("&nbsp;&nbsp;&nbsp;&nbsp;");
}

const AscSort = () => {
    let newArr = [...arr];
    newArr.sort((a, b) => a - b);
    document.querySelector('#arrAsc').innerHTML = "Mảng tăng dần:  " + newArr.join("&nbsp;&nbsp;&nbsp;&nbsp;");
}

const DescSort = () => {
    let newArr = [...arr];
    newArr.sort((a, b) => b - a);
    document.querySelector('#arrDesc').innerHTML = "Mảng giảm dần:  " + newArr.join("&nbsp;&nbsp;&nbsp;&nbsp;");
}
