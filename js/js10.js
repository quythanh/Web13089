const Process = () => {
    const p = document.querySelector('#res');

    p.innerText = document.querySelector('#title').value;
    p.style.backgroundColor = document.querySelector('#bgcolor').value;
    p.style.color = document.querySelector('#fontcolor').value;
}
