;(function() {
  let $pages;

  function urlChangeHandler() {
    let pageid = parseUrl(location.hash);

    $pages
      .fadeOut(400)
      .promise()
      .then(function() {
        $pages.hide()
          .detach()
          .filter('.page' + pageid)
          .appendTo('article')
          .fadeIn(1500);
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

  init();
})();
