Array.prototype.myReduce = function (cb, ...args) {
  const isInit = args.length > 0;
  const init = args[0];
  let res = isInit ? init : this[0];
  let index = isInit ? 0 : 1;
  let len = this.length;
  for (let i = index; i < len; i++) {
    res = cb(res, this[i]);
  }
  return res;
};

let res = [1, 2, 3].myReduce((pre, cur) => {
  console.log('pre,cur', pre, cur);
  return pre + cur;
}, undefined);
console.log('res', res);

let r = [1, 2, 3].reduce((pre, cur) => {
  console.log('pre,cur', pre, cur);
  return pre + cur;
}, undefined);
console.log('res', r);
