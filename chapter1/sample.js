function Observer() {
  this.listeners = {};
}

Observer.prototype.on = function(event, func) {
  if (!this.listeners[event]) {
    this.listeners[event] = [];
  }
  this.listeners[event].push(func);
};

Observer.prototype.off = function(event, func) {
  let ref = this.listeners[event];
  let length = ref.length;
  for (let i = 0; i < length; i++) {

    let listener = ref[i];
    if (listener === func) {
      ref.splice(i, 1);
    }
  }
};

Observer.prototype.trigger = function(event) {
  let ref = this.listeners[event];
  let length = ref.length;
  for (let i = 0; i < length; i++) {

    let listener = ref[i];
    if (typeof listener === 'function') {
      listener();
    }
  }
};

let observer = new Observer();

// morning イベント
let greet = function() {
  console.log('Good morning');
};

let wakeup = function() {
  console.log('起きる');
};

observer.on('morning', greet);
observer.on('morning', wakeup);
observer.trigger('morning');
observer.off('morning', wakeup);
observer.trigger('morning');

// evening イベント
let sayEvening = function() {
  console.log('Good evening');
};

observer.on('evening', sayEvening());
observer.trigger('evening');
