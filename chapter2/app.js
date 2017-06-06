function Modal(element) {
  this.initialize(element);
}

Modal.prototype.initialize = function(element) {
  this.$element   = element;
  this.$container = $('#modal');
  this.$contents  = $('#modal-contents');
  this.$overlay   = $('#modal-overlay');
  this.$window    = $(window);
  this.$parents   = this.$element.parents('ul');

  this.handleEvents();
};

Modal.prototype.handleEvents = function() {
  let self = this;

  this.$parents.on('click', 'a', function(e) {
    self.show(e);
    return false;
  });

  this.$container.on('click', '#modal-next', function(e) {
    self.next(e);
    return false;
  });

  this.$container.on('click', '#modal-prev', function(e) {
    self.prev(e);
    return false;
  });

  this.$container.on('click', '#modal-close', function(e) {
    self.hide(e);
    return false;
  });

  this.$overlay.on('click', function(e) {
    self.hide(e);
    return false;
  });

  this.$window.on('resize load', function() {
    self.resize();
  });
};

Modal.prototype.show = function(e) {
  let $target = $(e.currentTarget);
  let src     = $target.attr('href');

  this.$contents.html('<img src="' + src + '"/>');
  this.$container.fadeIn();
  this.$overlay.fadeIn();

  let index = $target.data('index');
  this.countChange = this.createCounter(index, this.$element.length);
  return false;
};

Modal.prototype.createCounter = function(index, length) {
  return function(num) {
    return index = (index + num + length) % length;
  };
};

Modal.prototype.hide = function(e) {
  this.$container.fadeOut();
  this.$overlay.fadeOut();
};

Modal.prototype.slide = function(index) {
  this.$contents.find('img').fadeOut({
    complete: function() {
      let src = $('[data-index="' + index + '"]').find('img').attr('src');
      $(this).attr('src', src).fadeIn();
    }
  });
};

Modal.prototype.next = function() {
  this.slide(this.countChange(1));
};

Modal.prototype.prev = function() {
  this.slide(this.countChange(-1));
};

Modal.prototype.resize = function() {
  let w = this.$window.width();

  if (w < 640) {
    this.$container.css({'width': '320', 'height': '213'});
  } else {
    this.$container.css({'width': '750', 'height': '500'});
  }
};

let modal = new Modal($('#modal-thumb a'));


$('#more-btn').on('click', function() {
  let html = `
    <li>
      <a href="images/photo-04.JPG" data-index="3">
        <img alt="" src="images/photo-04.JPG" width="160" class="img-thumbnail">
      </a>
     </li>
  `;

  $(html).appendTo($('#modal-thumb')).hide().fadeIn();
  $(this).fadeOut();

  modal.$element = $('#modal-thumb a');
});