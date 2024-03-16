//版本号对比
function versionCompare(v1, v2) {
  let v1 = v1.split('.'),
    v2 = v2.split('.');
  let len = Math.max(v1.length, v2.length);
  for (var i = 0; i < len; i++) {
    var a = parseInt(v1[i]) || 0,
      b = parseInt(v2[i]) || 0;
    if (a < b) return -1;
    if (a > b) return 1;
  }
  return 0;
}

console.log(versionCompare('1.1', '1.1.0.1'));
