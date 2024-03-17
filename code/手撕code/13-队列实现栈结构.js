class Stack {
  list = [];

  push(item) {
    this.list = [item, ...this.list];
  }
  pop() {
    return this.list.shift();
  }
}

class Stack2 {
  constructor() {
    this.list1 = [];
    this.list2 = [];
  }

  push(v) {
    this.list1.push(v);
    while (this.list2.length > 0) {
      this.list1.push(this.list2.shift());
    }
    [this.list1, this.list2] = [this.list2, this.list1];
  }
  pop() {
    return this.list2.shift();
  }
}

let s1 = new Stack();
s1.push(1);
s1.push(2);
s1.push(3);
s1.pop();

