/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
	if (nums.length === 0 || nums.length === 1) {
		return nums[0] || 0;
	}
	const dp = [];
	//dp[i] = max(dp[i-1], dp[i-2] + nums[i])
	const getMaxValue = (i) => {
		if (i < 0) {
			return 0;
		}

		return Math.max(getMaxValue(i - 1), getMaxValue(i - 2) + nums[i]);
	};
	return getMaxValue(nums.length - 1);
};

var rob2 = function (nums) {
	if (nums.length === 0 || nums.length === 1) {
		return nums[0] || 0;
	}

	let pree = nums[0],
		pre = nums[1],
		res = 0;
	const helper = {
		0: nums[0],
		1: Math.max(nums[0], nums[1]),
	};

	for (let i = 0; i < nums.length; i++) {
		if (i < 2) {
			res = helper[i];
		} else {
			res = Math.max(pre, pree + nums[i]);
		}
		pree = pre;
		pre = res;
	}

	return res;
};

console.log(rob2([2, 7, 4]));
