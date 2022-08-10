function Draw() {
    var xValues = document.getElementById('list').value.split(',');
    var yValues = [];
    for (var i = 0; i < xValues.length; i++) yValues[i] = xValues[i];
    var bar = [];
    for (var i = 0; i < xValues.length; i++)
        bar[i] =
            'rgb(' +
            (Math.floor(Math.random() * 300) % 256) +
            ',' +
            (Math.floor(Math.random() * 300) % 256) +
            ',' +
            (Math.floor(Math.random() * 300) % 256) +
            ')';

    new Chart('canvas', {
        type: 'pie',
        data: {
            labels: xValues,
            datasets: [
                {
                    backgroundColor: bar,
                    data: yValues,
                },
            ],
        },
        options: {
            title: {
                display: true,
                text: 'Random Chart',
            },
        },
    });
}
