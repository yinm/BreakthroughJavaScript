function App(url) {
  this.template = _.template($('[data-template="item"]').html());
  this.bindEvents();
  let self = this;

  this.fetch(url).then(function(data) {
    self.data = data;
    self.render(self.data.list);
  }, function(e) {
    console.error('データの取得に失敗しました');
  });
}

App.prototype.bindEvents = function() {
  _.bindAll(this, 'onChange');
  $('select').on('change', this.onChange);
};

App.prototype.fetch = function(url) {
  return $.ajax({
    url: url,
    dataType: 'json'
  });
};

App.prototype.onChange = function(e) {
  let self = this;
  let where = $('select').map(function(i, element) {
    let $element = $(element);
    return function(list) {
      return self[$element.attr('name')](list, $element.val());
    };
  });

  let list = _.reduce(where, function(prev, current) {
    return current(prev);
  }, this.data.list);
  this.render(list);
};

App.prototype.sort = function(list, key) {
  if (this.isEmpty(key)) {
    return list;
  }

  return _.sortBy(list, function(e) {
    return e[key];
  });
};

App.prototype.filter = function(list, value) {
  if (this.isEmpty(value)) {
    return list;
  }

  return _.filter(list, function(e) {
    return e['group'] === value;
  });
};

App.prototype.isEmpty = function(value) {
  return value === '';
};

App.prototype.render = function(data) {
  let html = this.template({
    list: data
  });
  $('.table tbody').html(html);
};

new App('data.json');