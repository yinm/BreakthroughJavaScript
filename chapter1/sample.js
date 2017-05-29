var a = 10;
var b = 15;

function add() {
  a = 5;
  var b = 5;
  console.log(a + b);
}

add();
console.log(a);
console.log(b);