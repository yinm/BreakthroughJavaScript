function urlChangeHandler() {
  alert(location.hash);
}

let $pages;

function init() {
  $pages = $('[data-role="page"]').detach();
  $(window).on('hashchange', urlChangeHandler);
}

init();
