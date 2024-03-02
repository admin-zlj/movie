// function getSearchParams(url) {
// 	if (!url) {
// 		return "";
// 	}
// 	let [href, params] = url.split("?");
// 	let paramsArr = params.split("&");
// 	let resObj = {};
// 	paramsArr.forEach((element) => {
// 		let [key, value] = element.split("=");
// 		value = decodeURIComponent(value);
// 		if (value.includes("{")) {
// 			value = JSON.parse(value);
// 		}
// 		resObj[key] = value;
// 	});
// 	return resObj;
// }
// const url =
// 	"https://fliggy.com/demo?name=feizhu&from=home&job=frontend&extraInfo=%7B%22a%22%3A%22b%22%2C%22c%22%3A%22d%22%7D";

// // 测试代码请勿修改
// if (
// 	JSON.stringify(getSearchParams(url)) ===
// 	JSON.stringify({
// 		name: "feizhu",
// 		from: "home",
// 		job: "frontend",
// 		extraInfo: { a: "b", c: "d" },
// 	})
// ) {
// 	console.log("恭喜回答正确!");
// } else {
// 	console.log("还差一点");
// }

// const data = [
// 	{ date: "2021-12-25", cnt: 12 },
// 	{ date: "2021-12-28", cnt: 7 },
// 	{ date: "2021-12-30", cnt: 9 },
// 	{ date: "2022-01-02", cnt: 4 },
// 	{ date: "2022-01-03", cnt: 4 },
// ];

// function pathDate(data) {
// 	let start = data.at(0).date;
// 	let end = data.at(-1).date;
// 	let endDay = new Date(end);
// 	let midDate = new Date(start);
// 	let flag = true;
// 	while (flag) {
// 		let curTime = midDate.getTime() + 24 * 60 * 60 * 1000;
// 		midDate.setTime(curTime);
// 		let s = midDate.toJSON().slice(0, 10);
// 		if (data.findIndex((i) => i.date === s) == -1) {
// 			data.push({ date: s, cnt: 0 });
// 		}

// 		if (endDay.toJSON() === midDate.toJSON()) {
// 			flag = false;
// 		}
// 	}
// 	data.sort((a, b) =>new Date(a.date) - new Date(b.date));
// 	return data;
// }

// // ========================
// //    以下为测试代码无需修改
// // ========================

// const res = [
// 	{ date: "2021-12-25", cnt: 12 },
// 	{ date: "2021-12-26", cnt: 0 }, // 新增
// 	{ date: "2021-12-27", cnt: 0 }, // 新增
// 	{ date: "2021-12-28", cnt: 7 },
// 	{ date: "2021-12-29", cnt: 0 }, // 新增
// 	{ date: "2021-12-30", cnt: 9 },
// 	{ date: "2021-12-31", cnt: 0 }, // 新增
// 	{ date: "2022-01-01", cnt: 0 }, // 新增
// 	{ date: "2022-01-02", cnt: 4 },
// 	{ date: "2022-01-03", cnt: 4 },
// ];
// if (JSON.stringify(pathDate(data)) === JSON.stringify(res)) {
// 	console.log("恭喜！测试通过");
// } else {
// 	console.log("error");
// }

// function getBetweenDateStr(start, end) {
// 	let res = [];
// 	let endDay = new Date(end);
// 	res.push(start);
// 	let midDate = new Date(start);
// 	let flag = true;
// 	while (flag) {
// 		let curTime = midDate.getTime() + 24 * 60 * 60 * 1000;
// 		midDate.setTime(curTime);

// 		res.push(midDate.toJSON().slice(0, 10));
// 		if (endDay.toJSON() === midDate.toJSON()) {
// 			flag = false;
// 		}
// 	}
// 	console.log(res);
// 	return res;
// }

// let list = [{name:'a', age:1},{name:'a', age:2},{name:'a', age:3},{name:'c', age:2},    ]
// function sortData(arr){
// 	arr.sort((a,b)=>{
// 		if(a.age === b.age){
// 			return a.name.substring(0,1).charCodeAt() - b.name.substring(0,1).charCodeAt()
// 		}
// 		return a.age-b.age
// 	})
// 	return arr
// }

// add , subtract , multiply , divide
// function getArrMulMax(arr){
// 	let findMax, findMin, maxNum ;
// 	maxNum = findMax  = findMin = arr[0]
// 	let curMax,curMin;
// 	for (let i = 1; i < arr.length; i++) {
// 		curMin = findMin *arr[i]
// 		curMax = findMax * arr[i]
// 		findMin = Math.min(curMin,curMax,arr[i])
// 		findMax = Math.max(curMin,curMax,arr[i])
// 		maxNum = Math.max(maxNum,findMax)
// 	}
// 	console.log(maxNum);
// 	return maxNum
// }
//   let a = [1,-2,3,-5,10,-1]
//   getArrMulMax(a)

// let a = [1,2,34,5,6]

// console.log(a.filter(i=>i==1));
// a.reduce((pre,cur)=>{
// 	console.log(pre,cur);
// 	pre+=cur
// 	return pre
// })

// function copy(obj) {
// 	let newobj = Array.isArray(obj) ? [] : {};
// 	for (const key in obj) {
// 		if (obj[key] instanceof Object) {
// 			if (typeof obj[key] === "function") {
// 				newobj[key] = obj[key];
// 			} else {
// 				newobj[key] = copy(obj[key]);
// 			}
// 		} else {
// 			newobj[key] = obj[key];
// 		}
// 	}
// 	return newobj;
// }

async function A() {
	const a = await new Promise((resolve) => {
		setTimeout(() => {
			console.log("1");
			resolve();
		}, 11);
	});
	setTimeout(() => {
		console.log("2");
	}, 10);
}

async function B() {
	const b = await new Promise((resolve) => {
		setTimeout(() => {
			console.log("3");
			resolve();
		}, 0);
	});
	setTimeout(() => {
		console.log("4");
	}, 0);
}

function test1(){
	A();
	B()
}

async function test2(){
	await A();

	await B()
}
test1()
// test2()
