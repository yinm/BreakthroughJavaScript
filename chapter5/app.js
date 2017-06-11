function enter($el, action, prev, next) {
  return $.ajax({
    url: 'page2.html',
    dataType: 'html'

  }).then(function(d) {
    var content = $(d).find('[data-role=page] .inner');
    $el.html(content);

    return action();
  });
}

myRouter.add('1', $('.page1').detach());
myRouter.add('2', $('<section class="page"/>'), enter);
myRouter.add('3', $('<section class="page"/>'), null, null);
myRouter.add('4', $('<section class="page"/>'));

myRouter.start();
