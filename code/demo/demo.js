function curry(func) {
	let params=[]
    return function curried(...args) {
		params.push(...args);
        if (params.length === func.length) {
            return func(...params);
        } else {
			return curried;
        }
    };
}

// 测试
function add(a, b, c) {
    return a + b + c;
}

let curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 输出 6

