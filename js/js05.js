document.querySelectorAll('td').forEach((e, index) => {
    let html = [];
    for (let i = 2; i < 10; i++)
        html.push(`${index + 2} x ${i} = ${(index + 2)*i}`);
    e.innerHTML = html.join('<br>');
})