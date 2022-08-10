const img = document.querySelector('img');
var imgSize;
img.onload = e => imgSize = {width: img.clientWidth, height: img.clientHeight}

const scaleImg = ratio => {
    img.style.width = imgSize.width * ratio + 'px';
    img.style.height = imgSize.height * ratio + 'px';
}

document.querySelectorAll('input[name="size"]')
    .forEach(inp => inp.addEventListener('click', e => scaleImg(e.target.value - 0)));