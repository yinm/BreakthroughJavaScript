function Human(name) {
  this.name = name;
}

function greet(arg1, arg2) {
  console.log(arg1 + this.name + arg2);
}

let mike = new Human('Mike');
greet.apply(mike, ['Hello ', '!!']);