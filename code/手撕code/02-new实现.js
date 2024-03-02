function Myfn(name, age) {
	this.name = name
	this.age = age
}


let myfn  = new Myfn('admin',9)
console.log(myfn);
console.log('---------------');

function mynew(fn, ...args) {
	let newobj = {}
	newobj.__proto__ = fn.prototype
	let res = fn.apply(newobj, args)
	return typeof res==='object' ? res : newobj
}

let myfn2  = mynew(Myfn,'admin',9)
console.log(myfn2);

