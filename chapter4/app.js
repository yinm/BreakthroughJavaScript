let deferred = new $.Deferred();
setTimeout(function() {
  deferred.resolve();
}, 2000);

deferred.promise().then(function() {
  return $.ajax({
    url: 'data.json'
  });
}).then(function(res) {
  console.log(res);
});
