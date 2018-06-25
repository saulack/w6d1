function MovingObject(options){
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;

}


MovingObject.prototype.draw = function (ctx) {
  ctx.fillRect(0, 0, 500, 500);
  ctx.fillStyle = "purple";
  
  ctx.beginPath();
  ctx.arc(100, 100, 50, 0, 2*Math.PI, true);
  ctx.lineWidth = 5;
  ctx.strokeStyle = "red";
  ctx.fillStyle = "blue";
  ctx.fill();
  

  
};

MovingObject.prototype.move = function () {
  let dx = this.vel[0];
  let dy = this.vel[1];
  
  this.pos[0] += dx;
  this.pos[1] += dy;
  
};


module.exports = MovingObject;
