new $.Deferred().resolve().promise().then(function() {
  let deferred = new $.Deferred();

  $('body').animate({
    marginTop: 100
  }, {
    duration: 1000,
    complete: function() {
      deferred.resolve();
    }
  });

  return deferred.promise()
}).then(function() {
  console.log('done');
});