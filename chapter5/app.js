;(function() {
  let $pages;

  function urlChangeHandler() {
    let pageid = parseUrl(location.hash);

    $pages
      .detach()
      .removeClass('page-enter')
      .filter('.page' + pageid)
      .appendTo('article')
      .addClass('page-enter')
      .on('webkitAnimationEnd', function() {
        alert('animationEnd');
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
