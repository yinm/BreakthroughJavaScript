;(function() {
  let $pages;

  function urlChangeHandler() {
    let pageid = parseUrl(location.hash);

    $pages
      .hide()
      .detach()
      .filter('.page' + pageid)
      .appendTo('article')
      .fadeIn(1500);
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
