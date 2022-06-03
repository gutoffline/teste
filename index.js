var quadro = document.getElementById("quadro");
var ctx = quadro.getContext("2d");

quadro.width = window.innerWidth;
quadro.height = window.innerHeight;

ctx.fillStyle = "#fff";
ctx.fillRect(0, 0, quadro.width, quadro.height);

ctx.lineWidth = 5;
quadro.addEventListener('touchstart', function (evt) {
    ctx.beginPath();
    ctx.moveTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
    )
});
quadro.addEventListener('touchmove', function (evt) {
    ctx.lineTo(
        evt.touches[0].pageX,
        evt.touches[0].pageY
    );

    ctx.strokeStyle = "#000";
    ctx.lineWidth = 5;
    ctx.stroke();
});

