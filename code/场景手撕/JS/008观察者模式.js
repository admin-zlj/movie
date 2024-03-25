class Subject {
  constructor() {
    this.obs = [];
  }
  add(ob) {
    this.obs.push(ob);
  }
  notify(data) {
    this.obs.forEach((ob) => ob && ob.update(data));
  }
}
class Observer {
  update(data) {
    console.log('更新', data);
  }
}
