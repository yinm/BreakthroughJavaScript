;(function() {
  let $pages;

  function urlChangeHandler() {
    let pageid = parseUrl(location.hash);
    let $prevPage = $pages.filter(':visible');
    let $nextPage = $pages.filter('.page' + pageid);

    animEnd(
      $prevPage.addClass('page-leave')
    ).then(function() {
      $pages.detach().removeClass('page-leave');

      return animEnd(
        $nextPage
          .appendTo('article')
          .addClass('page-enter')
      );
    }).then(function() {
      $nextPage.removeClass('page-enter');
    });
  }

  function parseUrl(url) {
    return url.slice(1) || 1;
  };

  function init() {
    $pages = $('[data-role="page"]').detach();
    $(window)
      .on('hashchange', urlChangeHandler)
      .trigger('hashchange');
  }

  function animEnd($element) {
    let dfd = new $.Deferred;
    let callback = function() {
      dfd.resolve($element);
    };

    if ($element.length === 0) {
      dfd.resolve();
      return dfd;
    }

    $element.on('webkitAnimationEnd', callback);
    dfd.done(function() {
      $element.off('webkitAnimationEnd', callback);
    });

    return dfd;
  }

  init();
})();
