;(function() {
  let $pages;

  function urlChangeHandler() {
    let pageid = parseUrl(location.hash);

    $pages.filter('.page' + pageid).appendTo('article');
  }

  function parseUrl(url) {
    return url.slice(1);
  };

  function init() {
    $pages = $('[data-role="page"]').detach();
    $(window)
      .on('hashchange', urlChangeHandler)
      .trigger('hashchange');
  }

  init();
})();
