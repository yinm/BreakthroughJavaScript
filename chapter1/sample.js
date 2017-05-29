let a = 10;
let b = 15;

function add() {
  a = 5;
  let b = 5;
  console.log(a + b);
}

add();
console.log(a);
console.log(b);