var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
 
canvas.width = 450;
canvas.height = 450;
var santa = document.getElementById("santa");

var santa = {
	x: 200,
    y: 200,
    width: 50,
    height: 50,
    speed: 200,
};

// var mySprite = {
//     x: 200,
//     y: 200,
//     width: 50,
//     height: 50,
//     speed: 200,
//     color: '#c00'
// };
 
var keysDown = {};
window.addEventListener('keydown', function(e) {
    keysDown[e.keyCode] = true;
});
window.addEventListener('keyup', function(e) {
    delete keysDown[e.keyCode];
});
 
function move(mod) {
    if (37 in keysDown) {
        santa.x -= santa.speed * mod;
    }
    if (38 in keysDown) {
        santa.y -= santa.speed * mod;
    }
    if (39 in keysDown) {
        santa.x += santa.speed * mod;
    }
    if (40 in keysDown) {
        santa.y += santa.speed * mod;
    }
}
 
function render() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = santa.color;
    ctx.fillRect(santa.x, santa.y, santa.width, santa.height);
}
 
function run() {
    move((Date.now() - time) / 1000);
    render();
    time = Date.now();
}
 
var time = Date.now();
setInterval(run, 10);