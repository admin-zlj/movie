class Event {
  constructor() {
    this.Events = {};
  }
  on(eventName, fn) {
    if (!this.Events[eventName]) {
      this.Events[eventName] = [fn];
    } else {
      this.Events[eventName].push(fn);
    }
  }
  emit(eventName) {
    this.Events[eventName] && this.Events[eventName].forEach((fn) => fn && fn());
  }
  remove(eventName, fn) {
    if (!fn) {
      this.Events[eventName] = [];
      return;
    }
    if (this.Events[eventName]) {
      this.Events[eventName] = this.Events[eventName].filter((item) => item !== fn);
    }
  }
  once(eventName, fn) {
    const onceFn = function () {
      fn();
      this.remove(eventName, onceFn);
    };
    this.on(eventName, onceFn);
  }
}

const ev = new Event();
