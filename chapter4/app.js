let stooges = [
  {
    name: 'curly',
    age: 25
  }, {
    name: 'moe',
    age: 21
  }, {
    name: 'larry',
    age: 23
  }
];

mapResult = _.map(stooges, function(e) {
  return e.name;
});

console.log(mapResult);