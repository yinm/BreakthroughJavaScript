$(document).on('click', '.page a', function(e) {
  e.preventDefault();

  var href = $(this).attr('href');
  myRouter.navigate(href);
});

function createEnterFunc(path) {
  return function enter($el, action, prev, next) {
    return $.ajax({
      url: path,
      dataType: 'html'

    }).then(function(d) {
      var content = $(d).find('[data-role=page] .inner');
      $el.html(content);

      return action();
    });
  }
}

myRouter.add('/index.html', $('<section class="page"/>'), createEnterFunc('./index.html'));
myRouter.add('/page2.html', $('<section class="page"/>'), createEnterFunc('./page2.html'));
myRouter.add('/page3.html', $('<section class="page"/>'), createEnterFunc('./page3.html'));
myRouter.add('/page4.html', $('<section class="page"/>'), createEnterFunc('./page4.html'));

$('.page').detach();

myRouter.start();
