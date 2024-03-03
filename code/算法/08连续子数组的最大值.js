/**
 *
 * @param {[]} arr
 * @returns 
 */
function getMaxValue(arr) {
  if (arr.length === 0) return 0;
  let minv, maxv, resv;
  minv = maxv = resv = arr[0];
  for (let i = 1; i < arr.length; i++) {
    const item = arr[i];
    if (item < 0) {
      let tmp = minv;
      minv = maxv;
      maxv = tmp;
    }
    minv = Math.min(minv * item, item);
    maxv = Math.max(maxv * item, item);
    resv = Math.max(resv, maxv);
  }
  return resv;
}

let arr = [-2, -3, -1, 10]
console.log('getMaxValue(arr)', getMaxValue(arr))