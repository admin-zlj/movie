function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const num = arr[0];
  let left = [],
    right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= num) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return quickSort(left).concat([num], quickSort(right));
}



function quickSort2(arr) {
  if (arr.length <= 1) return arr;
  const midNum = arr[0];
  let l = [],
    r = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < midNum) l.push(arr[i]);
    else r.push(arr[i]);
  }
  return [...quickSort2(l), midNum, ...quickSort2(r)];
}



const testArr = [1, 10, 8, 28, 8, 2, 33, 8, 3, 4, 1, 2, 4, 9];

console.log(quickSort2(testArr));
