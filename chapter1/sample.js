function Human(name) {
  this.name = name;
}

Human.prototype.greet = function() {
  console.log('My name is ' + this.name);
};

let alice = new Human('Alice');
alice.greet();

let bob = new Human('Bob');
bob.greet();
