let prevState = $.Deferred().resolve().promise();

function asyncFuncDef() {
  let deferred = new $.Deferred();
  setTimeout(function() {
    deferred.resolve('done');
  }, 1000);
  return deferred.promise();
}

$(document).on('click', function() {
  prevState = prevState.then(function() {
    console.log('done');
    return asyncFuncDef();
  });
});