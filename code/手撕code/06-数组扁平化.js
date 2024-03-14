let a = [1, [2, [3, [4]]]];

Array.prototype.myflat = function () {
  let newarr = this.map((item) => {
    if (Array.isArray(item)) {
      return item.myflat();
    }
    return item;
  });

  return [].concat(...newarr);
};

Array.prototype.allFlat = function () {
  let arr = this;
  let hasArr = true;
  while (hasArr) {
    arr = [].concat(...arr);
    hasArr = arr.some(Array.isArray);
  }
  return arr;
};
function flattenArray(arr) {
  return arr.reduce(
    (acc, val) => (Array.isArray(val) ? acc.concat(...flattenArray(val)) : acc.concat(val)),
    []
  );
}
// console.log('first', flattenArray(a), a);

Array.prototype.copyFlat = function (n) {
  let num = n || 1;
  let arr = this;
  for (let i = 0; i < num; i++) {
    arr = [].concat(...arr);
  }

  return arr;
};

console.log('flat', a.flat(2), a);
console.log('copyFlat', a.copyFlat(2), a);
