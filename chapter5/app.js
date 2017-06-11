;(function() {
  let $pages;
  let pageObjects = [];
  let urlHistory = [];

  function pageFactory(url, $element, enter, leave) {
    return {
      url: url,
      $element: $element,
      enter: enter,
      leave: leave
    }
  }

  function urlChangeHandler() {
    let pageid = parseUrl(location.hash);
    let $prevPage = $pages.filter(':visible');
    let $nextPage = getPage(pageObjects, pageid).$element;

    urlHistory.push(pageid);

    pageLeave($prevPage).then(function() {
      return pageEnter($nextPage);
    });
  }

  function parseUrl(url) {
    return url.slice(1) || 1;
  };

  function init() {
    pageObjects.push( pageFactory('1', $('.page1'), null, null) );
    pageObjects.push( pageFactory('2', $('.page2'), null, null) );
    pageObjects.push( pageFactory('3', $('.page3'), null, null) );
    pageObjects.push( pageFactory('4', $('.page4'), null, null) );

    $pages = $('[data-role="page"]').detach();
    $(window)
      .on('hashchange', urlChangeHandler)
      .trigger('hashchange');
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

  function getPage(pages, key) {
    return pages.filter(function(e) {
      return e.url == key;
    })[0] || null;
  }

  function pageEnter($element) {
    let $page = $element.addClass('page-enter').appendTo('article');
    return animEnd($page).then(function() {
      $element.removeClass('page-enter');
    });
  }

  function pageLeave($element) {
    let $page = $element.addClass('page-leave');
    return animEnd($page).then(function() {
      $element.detach();
      $element.removeClass('page-leave');
    })
  }

  init();
})();
