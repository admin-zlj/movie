var simpleStr = "This is a simple string";
var newStr = new String("String created with constructor");
var myDate = new Date();
var myObj = {};
var myNonObj = Object.create(null);


function myInstanceof(child, father) {
	if (child==null) {
		return false
	}
	
	let cp = child.__proto__;
	let fp = father.prototype;
	while (cp){
		if (cp === fp) {
			return true;
		}
		cp=cp.__proto__
	}
	return false;
}


simpleStr instanceof String; // 返回 false, 非对象实例，因此返回 false
// console.log(myInstanceof(simpleStr,String));


// console.log(simpleStr instanceof String);
// console.log(null instanceof Object);






newStr instanceof String; // 返回 true
// console.log(myInstanceof(newStr,String));

myObj instanceof Object; // 返回 true, 尽管原型没有定义
// console.log(myInstanceof(myObj,Object));
({} instanceof Object); // 返回 true, 同上
// console.log(myInstanceof(({}),Object));
myNonObj instanceof Object; // 返回 false, 一种创建非 Object 实例的对象的方法
// console.log(myInstanceof(myNonObj,Object));

myDate instanceof Date; // 返回 true
// console.log(myInstanceof(myDate,Date));
myDate instanceof Object; // 返回 true
// console.log(myInstanceof(myDate,Object));
myDate instanceof String; // 返回 false
// console.log(myInstanceof(myDate,String));
