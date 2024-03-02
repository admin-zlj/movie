// function Person() {
// 	this.name = "admin";
// 	this.age = 18;
// 	this.aihao = ["跑步", "写代码"];
// 	this.sayHi = function () {
// 		console.log("Hi", this.name + "-" + this.age);
// 	};
// }
// Person.prototype.get = function () {
// 	console.log("Person.prototype.get");
// };

/**
 * 1.原型链继承
 * 	优点： 复用
 * 	缺点：	1.父类中引用类型，所有子类共享，更改一个子类，所有子类都变
 * 			2.子类实力不能给构造函数传参
 */
// function Student() {}
// Student.prototype = new Person();

/**
 * 2.构造函数继承
 * 优点：	类中引用类型，子类不共享
 * 缺点：	子类不能访问父类的原型属性上的方法
 */
//  function Student(){
// 	Person.call(this)
//  }

/**
 * 3.组和继承
 * 缺点：会调用两次父类构造函数，影响性能
 */

//  function Student() {
// 	Person.call(this)
//  }
//  Student.prototype = new Person();

/**
 * 4.寄生组合继承
 *  目前最优
 */
// function Student() {
// 	Person.call(this);
// }
// function fn() {}
// fn.prototype = Person.prototype;
// Student.prototype = new fn();

/**
 * 5.class继承
 *
 */
class Person {
	constructor() {
		this.name = "admin";
		this.age = 18;
		this.aihao = ["跑步", "写代码"];
		this.sayHi = function () {
			console.log("Hi", this.name + "-" + this.age);
		};
	}
	get = function () {
		console.log("Person.prototype.get");
	};
}
class Student extends Person {}

/**
 *
 */
let s1 = new Student();
s1.name = "zlj";
s1.aihao.push("打球");
console.log(s1.name);
console.log(s1.aihao);
s1.sayHi();
s1.get();
console.log("------------");
let s2 = new Student();
console.log(s2.name);
console.log(s2.aihao);
s2.sayHi();
s2.get();

console.log("------------");
console.log(s1, s2);
