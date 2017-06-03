function AppModel(attrs) {
  this.val = '';
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

AppModel.prototype.required = function() {
  return this.val !== '';
};

AppModel.prototype.maxlength = function(num) {
  return num >= this.val.length;
};

AppModel.prototype.minlength = function(num) {
  return num <= this.val.length;
};


