var permute = function(nums) {
    const res = [], path = []
    const used = new Array(nums.length).fill(false)

    const dfs = () => {
        for (let i = 0; i < nums.length; i++) {
            if (used[i]) continue
            path.push(nums[i])
            used[i] = true
            dfs()
            path.pop()
            used[i] = false
        }
		if (path.length == nums.length) {
            res.push(path.slice())
            return
        }
    }

    dfs()
	console.log('res', res)

    return res
};
permute([1,2,3])