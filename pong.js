
/*var animate = window.requestAnimationFrame ||
window.webkitRequestAnimationFrame ||
window.mozRequestAnimationFrame ||
function(callback) {window.setTimeout(callback, 1000/60)};*/

/* runs the tab at 60fps or until closed*/
var canvas = document.createElement('canvas');
var width = 400;
var height = 600;
canvas.width =width;
canvas.height = height;
var context = canvas.getContext('2d');
/* attaches canvas to screen*/
window.onload = function() {
  document.body.appendChild(canvas);
  /*animate(step);*/
  setInterval(step, 1000/60);
}
/* updates all objects in the game*/
var step = function() {
update();
render();
/*animate(step);*/
}
/* fillstyle and fillrect(changes the colour of background) */
var update = function() {
};

var ender = function(){
  context.fillstyle = "#FF00FF";
  context.fillRect(0, 0, width, height);
};
/*paddle + x and y positions*/
function Paddle(x, y, width, height){
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
  this.x_speed = 0
  this.y_speed = 0
}

Paddle.prototype.render = function() {
  context.fillStyle = "#0000FF";
  context.fillRect(this.x, this.y, this.width, this.height);
}
/*Objects AI and PLayer*/
function Player() {
  this.paddle = new Paddle(175, 580, 50, 10);
}

function Computer() {
  this.paddle = new Paddle(175, 10, 50, 10);
}
/* Paddles rendering*/
Player.prototype.render = function() {
  this.paddle.render();
}

Computer.prototype.render = function() {
  this.paddle.render();
}

/*The Ball*/

function Ball(x, y) {
  this.x = x;
  this.y = y;
  this.x_speed = 0;
  this.y_speed = 3;
  this.radius = 5;
}

Ball.prototype.render = function() {
  context.beginPath();
  context.arc(this.x, this.y, this.radius, 2 * Math.PI, false);
  context.fillStyle = "#000000";
  context.fill();
};

var player = new Player();
var computer = new Computer();
var ball = new Ball(200, 300);

var render = function() {
  context.fillStyle = "#FF00FF";
  context.fillRect(0, 0, width, height);
  player.render();
  computer.render();
  ball.render();
}
