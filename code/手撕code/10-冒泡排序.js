let arr = [1, 4, 2, 6, 12, 34, 5, 6, 9, 8, 10];


/**
 *
 * @param {[]} arr
 */
function bubbleSort(arr) {
  const len = arr.length;
  let mid = 0;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (arr[i + 1] < arr[i]) {
        mid = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = mid;
      }
    }
  }
}
bubbleSort(arr)
console.log(arr);
