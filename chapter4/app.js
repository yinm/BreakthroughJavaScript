let deferred = new $.Deferred();

$('body').animate({
  marginTop: 100
}, {
  duration: 1000,
  complete: function() {
    deferred.resolve();
  }
});

deferred.promise().then(function() {
  console.log('done');
});