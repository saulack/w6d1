function Animal (species) {
  this.species = species;
}
Animal.prototype.move = function () {
  console.log("moving");
};


function Dog (name) {
  this.name = name;
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log("woof");
};


function Cat (name) {
  this.name = name;
}
Cat.prototype = Object.create(Animal.prototype);
// Cat.prototype.constructor = Cat;

Cat.prototype.meow = function () {
  console.log("meow");
};


