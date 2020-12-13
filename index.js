var canvas = document.querySelector('#canvas');
var c = canvas.getContext('2d');

var shapePosition = [100, 800];
var g = 2.5;
var gravity;
var jumping = 0;
var objA = {};
var objB = {};
var yplus = 0;
class testses {
  constructor (data={}) {
    this.x = data.x || 0;
    this.y = data.y || 0;
  }
  
  move() {
    
  }
}
for (var i = 1; i < 16; i++) {
  objA['shape' + i] = new testses({'x': 550, 'y': 250});
}

function moveOutSine(shape, x2, y2, n, x1=shape.x, y1=shape.y, t=0) {
  shape.x = x1+(x2-x1)*Math.sin(Math.PI*0.5*(t/n));
  shape.y = y1+(y2-y1)*Math.sin(Math.PI*0.5*(t/n));
  if (n == t) return;
  setTimeout( function() {moveOutSine(shape, x2, y2, n, x1, y1, t+1);}, 10)
}
function clock() {
  setTimeout( function() {
  moveOutSine(objA.shape1,550,250,30);
  moveOutSine(objA.shape2,550,350,30);
  moveOutSine(objA.shape3,550,450,30);
  moveOutSine(objA.shape4,550,550,30);
  moveOutSine(objA.shape5,550,650,30);
  moveOutSine(objA.shape6,550,250,30);
  moveOutSine(objA.shape7,550,250,30);
  moveOutSine(objA.shape8,550,450,30);
  moveOutSine(objA.shape9,550,550,30);
  moveOutSine(objA.shape10,550,650,30);
  moveOutSine(objA.shape11,550,650,30);
  moveOutSine(objA.shape13,550,350,30);
}, 1000)
  setTimeout( function() {
    moveOutSine(objA.shape9,550,450,1);
    moveOutSine(objA.shape12,550,450,1);
  }, 1500)
  setTimeout( function() {
  moveOutSine(objA.shape4,350,550,30);
  moveOutSine(objA.shape6,450,250,30);
  moveOutSine(objA.shape7,350,250,30);
  moveOutSine(objA.shape8,450,450,30);
  moveOutSine(objA.shape9,350,450,30);
  moveOutSine(objA.shape10,450,650,30);
  moveOutSine(objA.shape11,350,650,30);
  moveOutSine(objA.shape12,350,450,30);
  }, 2000)
  setTimeout( function() {
    moveOutSine(objA.shape4,550,550,30);
  }, 3000)
  setTimeout( function() {
  moveOutSine(objA.shape7,350,350,30);
  moveOutSine(objA.shape6,350,250,30);
  moveOutSine(objA.shape10,550,650,30);
  moveOutSine(objA.shape11,550,650,30);
  }, 4000)
  setTimeout( function() {
  moveOutSine(objA.shape2,350,350,30);
  moveOutSine(objA.shape4,550,550,30);
  moveOutSine(objA.shape6,450,250,30);
  moveOutSine(objA.shape7,350,250,30);
  moveOutSine(objA.shape10,450,650,30);
  moveOutSine(objA.shape11,350,650,30);
  moveOutSine(objA.shape13,350,350,30);
  }, 5000)
  setTimeout( function() {
    moveOutSine(objA.shape12,350,550,30);
  }, 6000)
  setTimeout( function() {
    moveOutSine(objA.shape2,550,350,30);
    moveOutSine(objA.shape8,550,450,30);
    moveOutSine(objA.shape9,550,450,30);
    moveOutSine(objA.shape10,550,650,30);
    moveOutSine(objA.shape11,550,650,30);
    moveOutSine(objA.shape12,550,550,30);
    moveOutSine(objA.shape13,550,350,30);
  }, 7000)
  setTimeout( function() {
    moveOutSine(objA.shape4,350,550,30);
    moveOutSine(objA.shape6,450,250,30);
    moveOutSine(objA.shape7,350,250,30);
    moveOutSine(objA.shape8,450,450,30);
    moveOutSine(objA.shape9,350,450,30);
    moveOutSine(objA.shape10,450,650,30);
    moveOutSine(objA.shape11,350,650,30);
    moveOutSine(objA.shape13,350,350,30);
  }, 8000)
  setTimeout( function() {
    moveOutSine(objA.shape4,550,550,30);
  }, 9000)
  setTimeout( function() {
    moveOutSine(objA.shape9,350,550,30);
    moveOutSine(objA.shape8,350,450,30);
    clock();
  }, 10000)
}
clock();

function jumpdae() {
  setTimeout( function() {
    moveOutSine(objA.shape14,250,800,10);
    moveOutSine(objA.shape15,250,750,50);
  }, 1000)
  setTimeout( function() {
    moveOutSine(objA.shape14,250,750,50);
    moveOutSine(objA.shape15,250,800,10);
    jumpdae();
  }, 2000)
}
jumpdae();

Math.rad = function(degrees) {
  return degrees * Math.PI / 180;
};
for (var i = 1; i < 16; i++) {
  objB['shape' + i] = new testses({'x': 1000, 'y': 450 + yplus});
  yplus += 25
}

/*setInterval(function() {
  for(var Bmove in objB) {
    var center = [1000, 450];
    var dist = Math.sqrt((objB[Bmove].x-center[0])**2+(objB[Bmove].y-center[1])**2);
    var centerDeg = (Math.atan2(objB[Bmove].y-center[1], objB[Bmove].x-center[0])/Math.PI*180+270+1)%360;
    objB[Bmove] = [-Math.sin(Math.rad(centerDeg))*dist, Math.cos(Math.rad(centerDeg))*dist];
  }
},1)
*/

setInterval( function () {
  c.clearRect(0,0,1500,900)

  c.lineWidth = 11;
  c.strokeStyle = '#000'
  c.fillStyle = '#bbbbbb'
  c.beginPath();
  c.rect(0,0,1500,900)
  c.stroke();
  c.closePath();

  x = shapePosition[0] - 10;
  y = 870 - Math.floor(shapePosition[1]);
  c.font = '100px Oswald';
  c.textBaseline = 'middle';
  c.fillText(x + ' , ' + y, canvas.width/2-c.measureText(x + ' , ' + y).width/2, canvas.height/2);
  c.fillStyle = '#000'
  c.font = '20px Oswald';
  c.fillText('[제목 추천받음]', 1330,30);
  c.fillText('v0.2b', 1330,60);
  c.fillText('Tanks for Spotky1004', 1330,90);

  c.lineWidth = 5;

  if ((gravity > 4 && Math.abs(860 - shapePosition[1]) < 3) || (shapePosition[1] == 870 && !(keypress['38']))) {
    jumping = 0;
  }
  for (var asdf in objA) {
    if ((objA[asdf].y - shapePosition[1] >= 19 && objA[asdf].y - shapePosition[1] <= 24 && -50 <= (objA[asdf].x - shapePosition[0]) && (objA[asdf].x - shapePosition[0]) <= 20 ) && !(keypress['38'])) {
      jumping = 0;
    }
  }
  for (var asdf in objA) {
    if (objA[asdf].y - shapePosition[1] >= 19 && objA[asdf].y - shapePosition[1] <= 24 && -50 <= (objA[asdf].x - shapePosition[0]) && (objA[asdf].x - shapePosition[0]) <= 20 ) {
      g = 2.5;
      shapePosition[1] = objA[asdf].y - 25;
    }
  }
  for (var asdf in objB) {
    if ((objB[asdf].y - shapePosition[1] >= 19 && objB[asdf].y - shapePosition[1] <= 24 && -50 <= (objB[asdf].x - shapePosition[0]) && (objB[asdf].x - shapePosition[0]) <= 20 ) && !(keypress['38'])) {
      jumping = 0;
    }
  }
  for (var asdf in objB) {
    if (objB[asdf].y - shapePosition[1] >= 19 && objB[asdf].y - shapePosition[1] <= 24 && -50 <= (objB[asdf].x - shapePosition[0]) && (objB[asdf].x - shapePosition[0]) <= 20 ) {
      g = 2.5;
      shapePosition[1] = objB[asdf].y - 25;
    }
  }
  if (keypress['38']) jumping = 1;
  if (keypress['37'] && shapePosition[0] > 10) shapePosition[0] -= 2;
  if (jumping == 1 && shapePosition[1] > 10)  shapePosition[1] -= 5;
  if (keypress['39'] && shapePosition[0] < 1470) shapePosition[0] += 2;
  if (shapePosition[1] < 870) {
    gravity = 0.4*g**2;
    shapePosition[1] += gravity;
    g += 10/1000;
  }
  else {
    g = 2.5;
    gravity = 0;
  }

  if(shapePosition[1] > 870) shapePosition[1] = 870;

  c.strokeStyle = '#008844'
  c.fillStyle = '#44ff88'

  for (var Adraw in objA) {
  c.beginPath();
  c.rect(objA[Adraw].x,objA[Adraw].y,50,50);
  c.stroke();
  c.fill();
  c.closePath();
  } 
  c.strokeStyle = '#4466bb'
  c.fillStyle = '#4488ff'
  for (var Bdraw in objB) {
    c.beginPath();
    c.rect(objB[Bdraw].x,objB[Bdraw].y,50,50);
    c.stroke();
    c.fill();
    c.closePath();
    } 

    c.strokeStyle = '#0a88fe'
    c.fillStyle = '#00ffff'
    c.beginPath();
    c.rect(shapePosition[0], shapePosition[1], 20, 20);
    c.stroke();
    c.fill();
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