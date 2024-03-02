/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
	function isUdReturn0(s) {
		return s || 0;
	}
	let pre = new Array(text2.length + 1).fill(0);
	let res = [];

	for (let i = 0; i < text1.length; i++) {
		let s1 = text1[i];
		for (let j = 0; j < text2.length; j++) {
			let s2 = text2[j];
			if (s1 === s2) {
				res[j] = isUdReturn0(pre[j - 1]) + 1;
			} else {
				res[j] = Math.max(isUdReturn0(pre[j]), isUdReturn0(res[j - 1]));
			}
		}
		pre = [...res];
	}
	return res[text2.length - 1];
};

// console.log(longestCommonSubsequence("ezupkr", "ubmrapg"));
