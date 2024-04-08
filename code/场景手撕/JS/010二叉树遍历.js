//二叉树遍历
//      1
//    2   3
//  4  5  6 7

let root = {
  val: 1,
  left: {
    val: 2,
    left: {
      val: 4,
      left: null,
      right: null,
    },
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: {
      val: 6,
      left: null,
      right: null,
    },
    right: {
      val: 7,
      left: null,
      right: null,
    },
  },
};
let res = [];
function preOrder(root) {
  if (root) {
    preOrder(root.left);
    res.push(root.val);
    preOrder(root.right);
  }
}
preOrder(root);
console.log('res', res);
