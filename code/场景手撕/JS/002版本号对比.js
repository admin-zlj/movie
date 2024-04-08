//版本号对比
function versionCompare(ver1, ver2) {
  let v1 = ver1.split('.'),
    v2 = ver2.split('.');
  let len = Math.max(v1.length, v2.length);
  for (var i = 0; i < len; i++) {
    var a = parseInt(v1[i]) || 0,
      b = parseInt(v2[i]) || 0;
    if (a < b) return -1;
    if (a > b) return 1;
  }
  return 0;
}

function versionCompare2(v1, v2) {
  if (typeof v1 !== 'string' || typeof v2 !== 'string') return false;
  let str1 = v1.replaceAll('.', '');
  let str2 = v2.replaceAll('.', '');
  let maxLen = Math.max(str1.length, str2.length);
  str1 = +str1.padEnd(maxLen, '0');
  str2 = +str2.padEnd(maxLen, '0');
  if (str1 > str2) {
    return 1;
  }
  if (str1 < str2) {
    return -1;
  }
  return 0;
}

console.log(versionCompare2('1.1', '1.1.0.1'));
