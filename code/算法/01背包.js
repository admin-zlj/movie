/*
01背包

*/

/**
  dp[i][j]= max (dp(i-1,j), v[i]+dp[i-1][j-w[i]])
  
index(i)   1    2   3   4   5   6   7   //weight(j)
     
       1   0    4   4   4   4   4   4
     
       2   0    4   4   4   4   6
     
       3   0    4   4   4   4   6
     
       4   0    4   6   6
     
     
 */
const allweight = 6;
const value = [5, 10, 3, 6, 3];
const weight = [2, 5, 1, 4, 3];
const num = weight.length;

function getMaxValue(allweight, num, weight, value) {
	let dp = [0];
	let newdp = [0];
	for (let i = 0; i < num; i++) {
		for (let j = 1; j < allweight + 1; j++) {
			if (i === 0) {
				newdp[j] = j < weight[0] ? 0 : value[0];
			} else {
				newdp[j] =
					j >= weight[i]
						? Math.max(dp[j], value[i] + dp[j - weight[i]])
						: dp[j];
			}
		}
		dp = [...newdp];
		// console.log(dp);
	}

	return dp[allweight];
}

console.log(getMaxValue(allweight, num, weight, value));
