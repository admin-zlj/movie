let student1 = {
	name: "小明",
	age: 14,
	sex: function () {
		let aaaaaa = "aaaa";
	},
	girlfriend: {
		name: "小红",
		age: 13,
		friend: {
			name: "花花",
		},
	},
};

/**
 * 浅拷贝
 *  1.Object.assign({}，)
 * 	2.[...obj]
 */

//深拷贝
//1.json  undefined funtion 无法拷贝
// let studen2 = JSON.parse(JSON.stringify(student1))
//2.递归
function copy(obj) {
	let newobj = Array.isArray(obj) ? [] : {};
	for (const key in obj) {
		if (obj[key] instanceof Object) {
			if (typeof obj[key] === "function") {
				newobj[key] = obj[key];
			} else {
				newobj[key] = copy(obj[key]);
			}
		} else {
			newobj[key] = obj[key];
		}
	}
	return newobj;
}
let student2 = copy(student1);

console.log(student2);
console.log(student1 === student2);
// console.log(student1.girlfriend === studen2.girlfriend );
// console.log(student2.sex);

let a=[1,[2,undefined,[3,[4]]]]


