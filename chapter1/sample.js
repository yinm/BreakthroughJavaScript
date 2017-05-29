function Human(name) {
  this.name = name;
}

Human.prototype.greet = function() {
  console.log('Hello ' + this.name);
};

let mike = new Human('Mike');
mike.greet();