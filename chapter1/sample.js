function createCounter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  }
}

let counter1 = createCounter();
counter1();
counter1();
counter1();

let counter2 = createCounter();
counter2();
counter2();

count = 100;

counter1();
