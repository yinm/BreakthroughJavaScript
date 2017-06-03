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
  if (this.val === val) return;

  this.val = val;
  this.validate();
};

AppModel.prototype.validate = function() {
  let val;
  this.errors = [];

  for (let key in this.attrs) {
    val = this.attrs[key];
    if (!this[key](val)) this.errors.push(key);
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

function AppView(el) {
  this.initialize(el);
  this.handleEvents();
}

AppView.prototype.initialize = function(el) {
  this.$el = $(el);

  let obj = this.$el.data();

  if (this.$el.prop('required')) {
    obj['required'] = '';
  }

  this.model = new AppModel(obj);
};
