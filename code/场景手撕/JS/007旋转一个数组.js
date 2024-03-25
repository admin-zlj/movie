/**
 * 旋转数组
 * 输入: [1, 2, 3, 4, 5, 6, 7] 和 k = 3
 * 输出： [5, 6, 7, 1, 2, 3, 4 ]
 * @param {[]} arr
 * @param {number} k
 * @returns
 */
function rotateArr(arr, k) {
  let resArr = arr;
  let j = k;

  for (let i = 0; i < Math.min(k, arr.length - 1 - k); i++) {
    [resArr[i], resArr[j + 1], resArr[j]] = [resArr[j + 1], resArr[j], resArr[i]];
    j++;
  }
  return resArr;
}
console.log(rotateArr([1, 2, 3, 4, 5, 6, 7], 6));

/**
 *
 * 输入: [1, 3, 2, 10, 9, 5, 13]
 * 输出： ['1-3','5','9-10','13']
 * @param {[]} arr
 * @returns
 */
function getArrRes(arr) {
  let sortArr = arr.sort((a, b) => a - b);

  let res = [];
  let tmp = sortArr[0];
  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i] + 1 !== sortArr[i + 1]) {
      let item = tmp === sortArr[i] ? `${tmp}` : `${tmp}-${sortArr[i]}`;
      res.push(item);
      tmp = sortArr[i + 1];
    }
  }

  return res;
}

console.log(getArrRes([1, 3, 2, 10, 9, 5, 13]));
