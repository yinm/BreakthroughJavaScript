let data = {
  name: {
    first: 'Steve',
    last: 'Jobs'
  },
  age: 'RIP'
};

let compiled =_.template(html);
compiled(data);