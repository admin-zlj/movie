class Event {
  constructor() {
    this.events = {};
  }
  on(key, cb) {
    this.events[key] = cb;
  }
  emit(key, params = {}) {
    this.events[key] && this.events[key](params);
  }
  remove(key) {
    this.events[key] = null;
  }
}

const ev = new Event();

ev.emit('a');
ev.on('a', function () {
  console.log('aaaa');
});
ev.emit('a');
ev.remove('a');
ev.emit('a');
