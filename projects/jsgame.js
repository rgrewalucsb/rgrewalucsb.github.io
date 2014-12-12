var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
 
canvas.width = 450;
canvas.height = 450;
 
var santaimage = new Image();
santaimage.src = "../imgs/Santa.png";

function sprite (options) {
				
    var that = {};
					
    that.context = options.context;
    that.width = options.width;
    that.height = options.height;
    that.image = options.image;

    return that;

    that.render = function () {

        // Draw the animation
        that.context.drawImage(
           that.image,
           0,
           0,
           that.width,
           that.height,
           0,
           0,
           that.width,
           that.height);
    };
}

var santa = sprite({
    context: canvas.getContext("2d"),
    width: 100,
    height: 100,
    image: santaimage
});

santa.render();
 
var keysDown = {};
window.addEventListener('keydown', function(e) {
    keysDown[e.keyCode] = true;
});
window.addEventListener('keyup', function(e) {
    delete keysDown[e.keyCode];
});
 
function update(mod) {
    if (37 in keysDown) {
        mySprite.x -= mySprite.speed * mod;
    }
    if (38 in keysDown) {
        mySprite.y -= mySprite.speed * mod;
    }
    if (39 in keysDown) {
        mySprite.x += mySprite.speed * mod;
    }
    if (40 in keysDown) {
        mySprite.y += mySprite.speed * mod;
    }
}
 
function render() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = mySprite.color;
    ctx.fillRect(mySprite.x, mySprite.y, mySprite.width, mySprite.height);
}
 
function run() {
    update((Date.now() - time) / 1000);
    render();
    time = Date.now();
}
 
var time = Date.now();
setInterval(run, 10);