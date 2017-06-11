;(function() {
  let $pages;

  function urlChangeHandler() {
    alert(location.hash);
  }

  function init() {
    $pages = $('[data-role="page"]').detach();
    $(window).on('hashchange', urlChangeHandler);
  }

  init();
})();
