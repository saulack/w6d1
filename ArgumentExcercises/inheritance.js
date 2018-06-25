Function.prototype.inherits = function(parentClass){
  function Surrogate(){}
  Surrogate.prototype = parentClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inherits2 = function(parentClass){
  this.prototype = Object.create(parentClass.prototype);
  this.prototype.constructor = this;
};



function Animal (species) {
  this.species = species;
}
Animal.prototype.move = function () {
  console.log("moving");
};


function Dog (name) {
  this.name = name;
}
Dog.inherits(Animal);

Dog.prototype.bark = function () {
  console.log("woof");
};


function Cat (name) {
  this.name = name;
}
Cat.inherits(Animal);

Cat.prototype.meow = function () {
  console.log("meow");
};




