let count1 = 0;
function counter1() {
  count1++;
  console.log(count1);
}

let count2 = 0;
function counter2() {
  count2++;
  console.log(count2);
}

counter1();
counter1();
counter2();
counter2();

count1 = 100;

counter1();
counter1();
