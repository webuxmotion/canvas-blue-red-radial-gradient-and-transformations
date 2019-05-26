const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

for (let i = 1; i <= 4; i++) {
    ctx.translate(500, 0);
    ctx.rotate(2*Math.PI/4);
    drawEl();
}

function drawEl() {
    ctx.beginPath();
    let gradient = ctx.createRadialGradient(250, 256, 500, 250, 250, 150);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(1, 'blue');
    ctx.fillStyle = gradient;
    ctx.fillRect(10, 10, 100, 100);
    ctx.globalCompositeOperation = "xor";
    ctx.fillStyle = gradient;
    ctx.arc(100, 100, 60, 0, 2*Math.PI, true);
    ctx.fill();
    ctx.closePath();
}