;(function() {
  let $page;

  function init() {
    $pages = $('[data-role="page"]').detach();
    $(window).on('hashchange', urlChangeHandler);
  }

  function urlChangeHandler() {
    alert(location.hash);
  }

  init();
})();
