;(function() {
  let $page;

  function init() {
    $pages = $('[data-role="page"]').detach();
    $(window)
      .on('hashchange', urlChangeHandler)
      .trigger('hashchange');
  }

  function urlChangeHandler() {
    let pageid = parseUrl(location.hash);

    let $prevPage = $pages.filter(':visible');
    let $nextPage = $pages.filter('.page' + pageid);

    function enter() {
      $pages.detach();

      $nextPage
        .removeClass('page-enter')
        .appendTo('article')
        .addClass('page-enter');
    }

    if ($prevPage.length > 0) {
      $prevPage
        .addClass('page-leave')
        .on('webkitAnimationEnd', function onfadeOut() {
          $nextPage
            .off('webkitAnimationEnd', onfadeOut)
            .removeClass('page-leave')
            .detach();
          enter();
        });
    } else {
      enter();
    }
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

  function parseUrl(url) {
    return url.slice(1) || 1;
  }

  init();
})();
