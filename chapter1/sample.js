function Observer() {
  this.listeners = [];
}

Observer.prototype.on = function(func) {
  this.listeners.push(func);
};

Observer.prototype.off = function(func) {
  // 本だと間違えてる (linstener になってた)
  let length = this.listeners.length;
  for (let i = 0; i < length; i++) {

    let listener = this.listeners[i];
    if (listener === func) {
      this.listeners.splice(i, 1);
    }
  }
};


Observer.prototype.trigger = function(event) {
  let length = this.listeners.length;

  for (let i = 0; i < length; i++) {
    let listener = this.listeners[i];
    listener();
  }
};

let observer = new Observer();

let greet = function() {
  console.log('Good morning');
};

let walk = function() {
  console.log('tokotoko...');
};

observer.on(greet);
observer.on(walk);
observer.trigger();
observer.off(greet);
console.log('greetをoffにした');
observer.trigger();
