let uniq = function(array) {
  let obj = {};
  let uniqArray = [];
  let length = array.length;

  for (let i = 0; i < length; i++) {
    obj[array[i]] = '';
  }

  for (let k in obj) {
    uniqArray.push(k);
  }

  return uniqArray;
};

console.log(uniq ([1, 2, 5, 5, 1, 3, 1, 2, 4, 3]));