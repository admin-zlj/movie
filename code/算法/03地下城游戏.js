/**
 * 骑士救公主
 * @param {number[][]} dungeon
 * @return {number}
 *
 * dp[i][j] = dungeon[i][j] > 0 ?  min( dp[i-1][j] , dp[i][j] ) :   min( dp[i-1][j] , dp[i][j] ) - dungeon[i][j]
 * dp[i][j] = max( min( dp[i-1][j] , dp[i][j] ) , 1)
 *
 */
var calculateMinimumHP = function (dungeon) {
	const len1 = dungeon.length;
	const len2 = dungeon[0].length;

	const getMinNum = (i, j) => {
		if (i === len1 - 1 && j === len2) {
			return 1;
		}
		if (i === len1 && j === len2 - 1) {
			return 1;
		}
		if (i === len1 || j === len2) {
			return Infinity;
		}

		return Math.max(
			Math.min(getMinNum(i + 1, j), getMinNum(i, j + 1)) - dungeon[i][j],
			1
		);
	};
	// console.log(getMinNum(0, 0));
	return getMinNum(0, 0);
};

// calculateMinimumHP([
// 	[-1, -2, 3],
// 	[-1, 0, 0],
// 	[-3, -3, -2],
// ]);

var calculateMinimumHP2 = function (dungeon) {
	const len1 = dungeon.length;
	const len2 = dungeon[0].length;
	const dp = Array(len1 + 1)
		.fill()
		.map(() => Array(len2 + 1).fill(Infinity));

	dp[len1 - 1][len2] = 1;
	dp[len1][len2 - 1] = 1;
	for (let i = len1 - 1; i >= 0; i--) {
		for (let j = len2 - 1; j >= 0; j--) {
			dp[i][j] = Math.max(
				Math.min(dp[i + 1][j], dp[i][j + 1]) - dungeon[i][j],
				1
			);
		}
	}
	// console.log("dp", dp);
	// console.log('dp[0][0]', dp[0][0])
	return dp[0][0];
};

calculateMinimumHP2([
	[-2, -3, 3],
	[-5, -10, 1],
	[10, 30, -5],
]);
