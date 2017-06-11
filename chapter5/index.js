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
    $pages
      .detach()
      .removeClass('page-enter')
      .filter('.page' + pageid)
      .appendTo('article')
      .addClass('page-enter');
  }

  function parseUrl(url) {
    return url.slice(1) || 1;
  }

  init();
})();
