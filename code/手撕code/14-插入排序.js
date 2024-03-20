var ori = [99, 44, 55, 77, 33, 22, 1, 88, 0, 66];
//  4 5 7 9   3
function insertSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}
console.log('first', insertSort(ori));
