const MovingObject = require("./moving_object.js");
const Util = require("./util.js");
window.MovingObject = MovingObject;



document.addEventListener("DOMContentLoaded", function(){
  const canvas = document.getElementById("game-canvas");
  canvas.width = 500;
  canvas.height = 500;

  // const ctx = canvas.getContext("2d");
  // const mo = new MovingObject(
  //   { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
  // );
  // 
  // const m = new MovingObject (mo);
  // m.draw(ctx);
});


function Asteroid(obj) {
  Util.inherits(this, MovingObject);
  MovingObject.call(this, obj);
  this.color = Asteroid.COLOR;
  this.radius = Asteroid.RADIUS;
}
debugger
Asteroid.COLOR = "grey";
Asteroid.RADIUS = 20;