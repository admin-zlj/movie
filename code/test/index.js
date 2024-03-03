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

async function A() {
  const a = await new Promise((resolve) => {
    setTimeout(() => {
      console.log('1');
      resolve();
    }, 10);
  });
  setTimeout(() => {
    console.log('2');
  }, 10);
}

async function B() {
  const b = await new Promise((resolve) => {
    setTimeout(() => {
      console.log('3');
      resolve();
    }, 0);
  });
  setTimeout(() => {
	
    console.log('4');
  }, 0);
}

function test1() {
  A();
  B();
}

async function test2() {
  await A();

  await B();
}
// test1();
test2()
