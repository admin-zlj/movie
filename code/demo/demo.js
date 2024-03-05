Array.prototype.myReduce = function (callback, initValue) {
  let len = this.length;
  let pre = initValue || this[0];
  let index = 0;
  if (initValue === undefined) {
    index = 1;
  }
  while (index < len) {
    pre = callback(pre, this[index], index, this);
    index++;
  }
  return pre;
};



let res = [1, 2, 3].myReduce((pre, cur) => {
  console.log('pre,cur', pre, cur);
  return pre + cur;
});
console.log('res', res);

let r = [1, 2, 3].reduce((pre, cur) => {
  console.log('pre,cur', pre, cur);
  return pre + cur;
});
console.log('res', r);
