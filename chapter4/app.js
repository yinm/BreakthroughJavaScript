function App(url) {
  this.bindEvents();
  let self = this;

  this.fetch(url).then(function(data) {
    self.data = data;
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

new App('data.json');