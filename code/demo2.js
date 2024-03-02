/**
 * 现有N个任务需要处理，同一时间只能处理一个任务，处理每个任务所需要的时间固定为1。
每个任务都有最晚处理时间限制和积分值，在最晚处理时间点之前处理完成任务才可获得对应的积分奖励。
可用于处理任务的时间有限，请问在有限的时间内，可获得的最多积分。

输入描述
第一行为一个数N，表示有N个任务，1<=N<=100
第二行为一个数T，表示可用于处理任务的时间。1<=T<=100
接下来N行，每行两个空格分隔的整数(SLA和V)，SLA表示任务的最晚处理时间，V表示任务对应的积分。1<=SLA<=100, 0<=V<=100000


输出描述
可获得的最多积分
 */

// const readline = require("readline");

// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });
// let lineCount = 0;
// let lines = [];
// let n = 0;
// let t = 0;
// rl.on("line", (line) => {
// 	lineCount++;
// 	if (lineCount === 1) {
// 		n = +line;
// 		return;
// 	}
// 	if (lineCount === 2) {
// 		t = +line;
// 		return;
// 	}
// 	lines.push(line);

// 	if (lineCount === n + 2) {
// 		console.log(getResult(lines, t));
// 	}
// });
/**
 *
 * @param {[]} lines
 * @returns
 */
function getResult(lines, t) {
	let mapArr = lines.reduce((pre, cur) => {
		const [k, v] = cur.split(" ");
		return [
			{
				k: +k,
				v: +v,
			},
			...pre,
		];
	}, []);
	// console.log("mapArr", mapArr);

	let res = 0;
	mapArr.sort((a, b) => a.k - b.k);
	// console.log("mapArr", mapArr);
	for (let i = 0; i < t; i++) {
		const cur = mapArr
			.slice(i)
			.sort((a, b) => b.v - a.v)
			.shift();
		// console.log("cur", cur);
		let index = mapArr.findIndex((i) => {
			return i?.k === cur?.k && i?.v === cur?.v;
		});
		delete mapArr[index] 
		// console.log("mapArr", mapArr);
		res = res + (cur?.v || 0);
	}

	return res;
}
console.log(getResult(["1 3", "3 10", "3 10", "1 5"], 2));
