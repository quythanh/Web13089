var stat = {
    length: 0,
    words: 0,
    myMap: {}
};

function isAlNum(char) {
    char = char.charCodeAt(0);
    return (char > 47 && char < 58) || (char > 64 && char < 91) || (char > 96 && char < 123);
};

const Statistic = (str) => {
    str = document.querySelector('#str').value;
    stat.length = str.length;
    stat.words = str.split(' ').filter(e => e != '').length;

    for (let i = 0; i < str.length; i++)
        stat.myMap[str[i]] = stat.myMap[str[i]] ? stat.myMap[str[i]] + 1 : 1;
    
    let res = `Characters: ${stat.length}<br>Words: ${stat.words}<br>`;
    for (let i in stat.myMap)
        res += isAlNum(i) ? `Character '${i.toUpperCase()}': ${stat.myMap[i]}<br>` : '';
    document.querySelector('#stat').innerHTML = res;
}