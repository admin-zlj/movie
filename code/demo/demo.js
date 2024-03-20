class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkList {
  constructor() {
    this.head = null;
  }

  push(data) {
    if (this.head == null) {
      this.head = new Node(data);
      return;
    }
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(data);
  }
  insertData(index, data) {
    let newNode = new Node(data);
    if (index == 0) {
      [newNode.next, this.head] = [this.head, newNode];
      return;
    } else {
      let currentNode = this.head;
      let i = 0;
      while (i !== index-1) {
        currentNode = currentNode.next;
        i++;
      }
	  [newNode.next, currentNode.next] = [currentNode.next, newNode];
    }
  }
  print() {
    let currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

let link = new LinkList();
link.push(1);
link.push(2);
link.push(3);
link.insertData(3, 10);
// link.insertData(2, 20);
// link.insertData(3, 30);

link.print();
