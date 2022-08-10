var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');

// rectangle
ctx.fillStyle = '#0ff';
ctx.fillRect(0,0,400,400);

// circle
ctx.beginPath();
ctx.arc(200, 200, 200, 0, 2*Math.PI);

var grd = ctx.createLinearGradient(0, 0, 0, canvas.height);
grd.addColorStop(0, '#f00');
grd.addColorStop(0.5, '#fff');
grd.addColorStop(1, '#f00');

ctx.fillStyle = grd;
ctx.fill();
ctx.stroke();

//polygon
ctx.beginPath();
ctx.moveTo(200, 0);
ctx.lineTo(400, 200);
ctx.lineTo(200, 400);
ctx.lineTo(0, 200);
ctx.lineTo(200, 0);
ctx.fillStyle = '#ff0';
ctx.fill();
ctx.strokeStyle = '#f00';
ctx.stroke();

// text
ctx.font = '80px Arial';
ctx.lineWidth = 3;
ctx.strokeStyle = '#00f';
ctx.strokeText('HTML5', canvas.width/6, canvas.height/1.75);