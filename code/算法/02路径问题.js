/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *  dp[i][j] = dp[i-1][j] + dp[i][j-1]
 *
 * @param m int整型
 * @param n int整型
 * @return int整型
 */
function uniquePaths(m, n) {
	let cache = {};
	const dp = (i, j) => {
		if (cache[i + "-" + j]) {
			return cache[i + "-" + j];
		}
		if (i === 0 || j === 0) {
			return 1;
		}
		cache[i + "-" + j] = dp(i - 1, j) + dp(i, j - 1);
		return cache[i + "-" + j];
	};
	return dp(m - 1, n - 1);
}

console.log(uniquePaths(10, 10));
module.exports = {
	uniquePaths: uniquePaths,
};
