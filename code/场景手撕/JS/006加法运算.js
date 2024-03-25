/**
 * bigNum 相加
 * @param {string} n1 数字字符串
 * @param {string} n2 数字字符串
 * @returns
 */
function addBigNum(n1, n2) {
	if (isNaN(+n1) || isNaN(+n2)) {
		throw new Error("非法字符");
	}
	let arr1 = n1.toString().split("").reverse();
	let arr2 = n2.toString().split("").reverse();
	let maxlen = Math.max(arr1.length, arr2.length);
	let res = [];
	let falg = 0;
	for (let i = 0; i < maxlen; i++) {
		[res[i], falg] = getAddValue(arr1[i], arr2[i], falg);
	}
	let resStr = res.reverse().join("");

	return falg === 1 ? falg + resStr : resStr;
}
function getAddValue(n1 = 0, n2 = 0, n3 = 0) {
	let n = +n1 + +n2 + +n3;
	return [n % 10, n >= 10 ? 1 : 0];
}