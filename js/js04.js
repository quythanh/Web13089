document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    let form = document.forms[0];
    form["result"].value = eval(form["num1"].value + form["expr"].value + form["num2"].value)
})