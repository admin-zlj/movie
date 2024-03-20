class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // 向链表末尾添加节点
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  // 在指定位置插入节点
  insertAt(index, data) {
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    const newNode = new Node(data);
    let current = this.head;
    let i = 0;
    while (current && i < index - 1) {
      current = current.next;
      i++;
    }
    if (current) {
      newNode.next = current.next;
      current.next = newNode;
    } else {
      this.append(data);
    }
  }

  // 从链表中删除节点
  delete(data) {
    if (!this.head) {
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  // 打印链表中的所有节点值
  print() {
    let current = this.head;
	let res = []
    while (current) {
      console.log(current.data);
      current = current.next;
    }
	return res
  }
}

// 示例用法
const list = new LinkedList();
list.append(1); // 添加节点
list.append(2);
list.append(3);
list.print(); // 打印节点值
list.insertAt(1, 1.5); // 在指定位置插入节点
list.print(); // 再次打印节点值
list.delete(2); // 删除节点
list.print(); // 再次打印节点值
