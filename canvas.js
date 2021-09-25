var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = 'rgba(255,0,0,0.5)';
c.fillRect(100,100,100,100);
c.fillStyle = 'rgba(0,0,200,0.5)';
c.fillRect(400,100,100,100);
c.fillStyle = 'rgba(0,255,0,0.5)';
c.fillRect(300,300,100,100);

console.log(canvas);

//line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300,100);
c.lineTo(400,300);
c.strokeStyle = "#ff0035";
c.stroke();

//Arc / Circle
// c.beginPath();
// c.arc(300,300,30, 0, 15.1314, false);
// c.strokeStyle = 'blue';
// c.stroke();

for(let i = 0; i < 300; i ++) {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    c.beginPath();
    c.arc(x,y,30, 0, 15.1314, false);
    c.strokeStyle = 'blue';
    c.stroke();
}