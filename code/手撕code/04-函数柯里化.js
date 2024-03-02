function add() {
	let args = [...arguments];

	let _add = function () {
		args.push(...arguments);
		return _add;
	};
	_add.toString = function () {
		let sum = 0;
		args.reduce((prev, curv) => {
			return prev + curv;
		},0);
		// console.log(sum);
		return sum;
	};
	
	return _add;
}

console.log(add(1)(2)(8) == 11);
console.log("-----------");




function myadd(x) {
	return function (y) {
		return x + y;
	};
}
console.log(myadd(1)(2));

