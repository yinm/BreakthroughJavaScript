;(function() {
  let $pages;

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
        .on('webkitAnimationEnd', function onFadeOut() {
          $nextPage
            .off('webkitAnimationEnd', onFadeOut)
            .removeClass('page-leave')
            .detach();
        enter();
        });
    } else {
      enter();
    }
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

  init();
})();
