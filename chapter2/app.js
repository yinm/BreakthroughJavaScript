function Modal(element) {
  this.initialize(element);
}

Modal.prototype.initialize = function(element) {
  this.$element   = element;
  this.$container = $('#modal');
  this.$contents  = $('#modal-contents');
  this.$close     = $('#modal-close');
  this.$next      = $('#modal-next');
  this.$prev      = $('#modal-prev');
  this.$overlay   = $('#modal-overlay');
  this.$window    = $(window);
  this.index      = 0;

  this.handleEvents();
};

Modal.prototype.handleEvents = function() {
  let self = this;

  this.$element.on('click', function(e) {
    self.show(e);
    return false;
  });
};

Modal.prototype.show = function(e) {
  let $target = $(e.currentTarget);
  let src     = $target.attr('href');

  this.$contents.html('<img src="' + src + '"/>');
  this.$container.fadeIn();
  this.$overlay.fadeIn();
  this.index = $target.data('index');
  return false;
};

let modal = new Modal($('#modal-thumb a'));