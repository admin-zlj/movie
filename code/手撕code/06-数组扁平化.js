let a = [1, [2, [3, [4]]]];
// console.log(a.flat());
Array.prototype.myflat = function () {
  let newarr = this.map((item) => {
    if (Array.isArray(item)) {
      return item.myflat();
    }
    return item;
  });
  // console.log(newarr);
  return [].concat(...newarr);
};

console.log(a.myflat());
// console.log([].concat(...a));
// console.log([1].concat([99,98],[3,4,5]));

//flat
function myflat1(arr) {
  return [].concat(...arr);
}

function flat(arr) {
  let newarr = arr.map((item) => {
    if (Array.isArray(item)) {
      return flat(item);
    }
    return item;
  });

  return [].concat(...newarr);
}

console.log('a', flat(a))