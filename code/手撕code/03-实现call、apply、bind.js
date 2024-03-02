
function add(a, b, c) {
	console.log(a, b, c);
	console.log(this);
	return a + b + c;
}
function sub(){

}

let res1 = add.call(add, 2, 1, 1);
// let res1 = add.apply({ m: 100 }, 2, 1, 1);
// let res1 = add.bind({ m: 100 }, 2, 1, 1);
console.log(res1);
// let r=res1()
// console.log(r);
console.log("--------------");


// call实现
Function.prototype.Mycall = function (obj, ...args) {
	// console.log(typeof obj);
	obj ??=window
	if(typeof obj=='number' ){
		obj = new Number(obj)
	}else if(typeof obj=='string'){
		obj = new String(obj)
	}
	
	obj.fn= this;
	let res = obj.fn(...args);
	delete obj.fn;
	return res;
	
};

// let res2 = add.Mycall(add, 2, 1, 1);
// console.log(res2);




// apply实现
// Function.prototype.Myapply = function (obj, args) {
// 	obj ??=window
// 	if(typeof obj=='number' ){
// 		obj = new Number(obj)
// 	}else if(typeof obj=='string'){
// 		obj = new String(obj)
// 	}

// 	obj.fn = this;
// 	let res = obj.fn(...args);
// 	delete obj.fn;
// 	// console.log(obj);
// 	return res;
// };
// let res2 = add.Myapply(1, [2, 1, 1]);
// console.log(res2);




//bind 实现
Function.prototype.Mybind = function (obj, ...args) {
	return ()=>{
		return this.call(obj,...args);
	}
};

// let res2 = add.Mybind({ m: 100 }, 2, 1, 1);
// console.log(res2);
// let r2 = res2();
// console.log(r2);









