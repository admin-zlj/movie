/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const s1 = strs[0];
  let res = '';
  for (let i = 0; i < s1.length; i++) {
    let flag = strs.every((s) => s[i] === s1[i]);
    if (!flag) break;

    res += s1[i];
  }
  return res;
};

console.log(longestCommonPrefix(['aaafsd', 'aawwewer', 'aaddfff']))

