var canvas = document.querySelector('#canvas');
var c = canvas.getContext('2d');

var shapePosition = [100, 800];
var g = 2.5;
var obj = {};
class testses {
  constructor (data={}) {
    this.x = data.x || 0;
    this.y = data.y || 0;
  }
  
  move() {
    
  }
}
for (var i = 1; i < 51; i++) {
  obj['shape' + i] = new testses({'x': 550, 'y': 250});
}

function moveOutSine(shape, x2, y2, n, x1=shape.x, y1=shape.y, t=0) {
  shape.x = x1+(x2-x1)*Math.sin(Math.PI*0.5*(t/n));
  shape.y = y1+(y2-y1)*Math.sin(Math.PI*0.5*(t/n));
  if (n == t) return;
  setTimeout( function() {moveOutSine(shape, x2, y2, n, x1, y1, t+1);}, 10)
}
function clock() {
  setTimeout( function() {
  moveOutSine(obj.shape1,550,250,30);
  moveOutSine(obj.shape2,550,350,30);
  moveOutSine(obj.shape3,550,450,30);
  moveOutSine(obj.shape4,550,550,30);
  moveOutSine(obj.shape5,550,650,30);
  moveOutSine(obj.shape6,550,250,30);
  moveOutSine(obj.shape7,550,250,30);
  moveOutSine(obj.shape8,550,450,30);
  moveOutSine(obj.shape9,550,550,30);
  moveOutSine(obj.shape10,550,650,30);
  moveOutSine(obj.shape11,550,650,30);
  moveOutSine(obj.shape13,550,350,30);
}, 1000)
  setTimeout( function() {
    moveOutSine(obj.shape9,550,450,1);
    moveOutSine(obj.shape12,550,450,1);
  }, 1500)
  setTimeout( function() {
  moveOutSine(obj.shape4,350,550,30);
  moveOutSine(obj.shape6,450,250,30);
  moveOutSine(obj.shape7,350,250,30);
  moveOutSine(obj.shape8,450,450,30);
  moveOutSine(obj.shape9,350,450,30);
  moveOutSine(obj.shape10,450,650,30);
  moveOutSine(obj.shape11,350,650,30);
  moveOutSine(obj.shape12,350,450,30);
  }, 2000)
  setTimeout( function() {
    moveOutSine(obj.shape4,550,550,30);
  }, 3000)
  setTimeout( function() {
  moveOutSine(obj.shape7,350,350,30);
  moveOutSine(obj.shape6,350,250,30);
  moveOutSine(obj.shape10,550,650,30);
  moveOutSine(obj.shape11,550,650,30);
  }, 4000)
  setTimeout( function() {
  moveOutSine(obj.shape2,350,350,30);
  moveOutSine(obj.shape4,550,550,30);
  moveOutSine(obj.shape6,450,250,30);
  moveOutSine(obj.shape7,350,250,30);
  moveOutSine(obj.shape10,450,650,30);
  moveOutSine(obj.shape11,350,650,30);
  moveOutSine(obj.shape13,350,350,30);
  }, 5000)
  setTimeout( function() {
    moveOutSine(obj.shape12,350,550,30);
  }, 6000)
  setTimeout( function() {
    moveOutSine(obj.shape2,550,350,30);
    moveOutSine(obj.shape8,550,450,30);
    moveOutSine(obj.shape9,550,450,30);
    moveOutSine(obj.shape10,550,650,30);
    moveOutSine(obj.shape11,550,650,30);
    moveOutSine(obj.shape12,550,550,30);
    moveOutSine(obj.shape13,550,350,30);
  }, 7000)
  setTimeout( function() {
    moveOutSine(obj.shape4,350,550,30);
    moveOutSine(obj.shape6,450,250,30);
    moveOutSine(obj.shape7,350,250,30);
    moveOutSine(obj.shape8,450,450,30);
    moveOutSine(obj.shape9,350,450,30);
    moveOutSine(obj.shape10,450,650,30);
    moveOutSine(obj.shape11,350,650,30);
    moveOutSine(obj.shape13,350,350,30);
  }, 8000)
  setTimeout( function() {
    moveOutSine(obj.shape4,550,550,30);
  }, 9000)
  setTimeout( function() {
    moveOutSine(obj.shape9,350,550,30);
    moveOutSine(obj.shape8,350,450,30);
    clock();
  }, 10000)
}
clock();

function jumpdae() {
  setTimeout( function() {
    moveOutSine(obj.shape14,250,800,10);
    moveOutSine(obj.shape15,250,750,50);
  }, 1000)
  setTimeout( function() {
    moveOutSine(obj.shape14,250,750,50);
    moveOutSine(obj.shape15,250,800,10);
    jumpdae();
  }, 2000)
}
jumpdae();

setInterval( function () {
  c.clearRect(0,0,900,900)

  c.lineWidth = 11;
  c.strokeStyle = '#000'
  c.fillStyle = '#bbbbbb'
  c.beginPath();
  c.rect(0,0,900,900)
  c.stroke();
  c.closePath();

  x = shapePosition[0] - 10;
  y = 870 - Math.floor(shapePosition[1]);
  c.font = '100px Oswald';
  c.textBaseline = 'middle';
  c.fillText(x + ' , ' + y, canvas.width/2-c.measureText(x + ' , ' + y).width/2, canvas.height/2);

  c.lineWidth = 5;
  c.strokeStyle = '#0a88fe'
  c.fillStyle = '#00ffff'
  c.beginPath();
  c.rect(shapePosition[0], shapePosition[1], 20, 20);
  c.stroke();
  c.fill();

  if (keypress['37'] && shapePosition[0] > 10) shapePosition[0] -= 2;
  if (keypress['38'] && shapePosition[1] > 10) shapePosition[1] -= 5;
  if (keypress['39'] && shapePosition[0] < 870) shapePosition[0] += 2;
  if (shapePosition[1] < 870) {
    shapePosition[1] += 0.4*g**2;
    g += 10/1000;
  }
  else g = 2.5;

  if(shapePosition[1] > 870) shapePosition[1] = 870;

  c.strokeStyle = '#008844'
  c.fillStyle = '#44ff88'

  for (var hehe in obj) {
  c.beginPath();
  c.rect(obj[hehe].x,obj[hehe].y,50,50);
  c.stroke();
  c.fill();
  c.closePath();
  } 
  for (var asdf in obj) {
    if (obj[asdf].y - shapePosition[1] >= 19 && obj[asdf].y - shapePosition[1] <= 24 && -50 <= (obj[asdf].x - shapePosition[0]) && (obj[asdf].x - shapePosition[0]) <= 20 ) {
      g = 2.5;
      shapePosition[1] = obj[asdf].y - 25;
    }
  }
}, 1);

keypress = {};
document.addEventListener('keydown', keyUp);
document.addEventListener('keyup', keyDown);
function keyUp(e) {
  keypress[e.keyCode] = true;
}
function keyDown(e) {
  keypress[e.keyCode] = false;
}