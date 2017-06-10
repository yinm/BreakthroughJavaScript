let deferreds = $('img').map(function(i, element) {
  let deferred = new $.Deferred();
  let img = new Image();

  img.onload = function() {
    return deferred.resolve();
  };

  img.onerror = function() {
    return deferred.resolve();
  };
  img.src = element.src;
  return deferred.promise();
});

$.when.apply($, deferreds).then(function() {
  console.log('done');
});