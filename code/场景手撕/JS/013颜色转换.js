// 题目: 实现 rgbToHex() 函数, 将 rgb 转为 hex
// 例如: rgbToHex('rgb(255,255,255)') === '#ffffff'

/**
 *
 * @param {string} rgb
 */
function rgbToHex(rgb) {
  const rgbArr = rgb.match(/\d{1,3}/g).map(Number);
  return '#' + rgbArr.map((n) => n.toString(16).padEnd(2, 0)).join('');
}

console.log(rgbToHex('rgb(255,255,255)'));
/**
 *
 * @param {string} hex
 */
function hexToRgb(hex) {
  const rgbArr = hex.match(/\w{2}/g).map((n) => parseInt(n, 16));
  return `rgb(${rgbArr.join(',')})`;
}

console.log(hexToRgb('#ffaabb'));
