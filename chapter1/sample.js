function AppModel(attrs) {
  this.val = '';
  this.attrs = {
    required: '',
    maxlength: 8,
    minlength: 4
  };
  this.listeners = {
    valid: [],
    invalid: []
  };
}

AppModel.prototype.on = function(event, func) {
  this.listeners[event].push(func);
};

AppModel.prototype.trigger = function(event) {
  $.each(this.listeners[event], function() {
    this();
  });
};

AppModel.prototype.set = function(val) {
  if (this.val === val) {
    return;
  }

  this.val = val;
  this.validate();
};

AppModel.prototype.validate = function() {
  let val;
  this.errors = [];

  for (let key in this.attrs) {
    val = this.attrs[key];

    if (!this[key](val)) {
      this.errors.push(key);
    }
  }

  this.trigger(!this.errors.length ? 'valid' : 'invalid');
};

AppModel.prototype.required = function() {
  return this.val !== '';
};

AppModel.prototype.maxlength = function(num) {
  return num >= this.val.length;
};

AppModel.prototype.minlength = function(num) {
  return num <= this.val.length;
};


function AppView(element) {
  this.initialize(element);
  this.handleEvents();
}

AppView.prototype.initialize = function(element) {
  this.$element = $(element);
  this.$list = this.$element.next().children();

  let obj = this.$element.data();

  if (this.$element.prop('required')) {
    obj['required'] = '';
  }

  this.model = new AppModel(obj);
};

AppView.prototype.handleEvents = function() {
  let self = this;

  this.$element.on('keyup', function(e) {
    self.onKeyup(e);
  });

  this.model.on('valid', function() {
    self.onValid();
  });

  this.model.on('invalid', function() {
    self.onInvalid();
  });
};

AppView.prototype.onKeyup = function(e) {
  let $target = $(e.currentTarget);
  this.model.set($target.val());
};

AppView.prototype.onValid = function() {
  this.$element.removeClass('error');
  this.$list.hide();
};

AppView.prototype.onInvalid = function() {
  let self = this;
  this.$element.addClass('error');
  this.$list.hide();

  $.each(this.model.errors, function(index, val) {
    self.$list.filter('[data-error="' + val + '"]').show();
  });
};

$('input').each(function() {
  new AppView(this);
});
