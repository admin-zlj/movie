/** 
请输出下列结果
**/
1 + "23"; //123
1 + false; //1
1 + Symbol(); //报错
"1" + false; //1false
false + true; //1

/** 
请输出下列的值
**/
var id = "GLOBAL";
var obj = {
	id: "OBJ",
	a: function () {
		console.log(this.id);
	},
	b: () => {
		console.log(this.id);
	},
};
obj.a(); //OBj
obj.b(); //GLOBAL
new obj.a();   // undefined
new obj.b(); //报错

/** 
请输出下列二进制编码
10的原码和反码分别是什么
00001010    01110101 
**/

/** 
实现斐波那契数列
斐波那契（Fibonacci）数列，又称黄金分割数列，因数学家列昂纳多·斐波那契（Leonardo Fibonacci）以兔子繁殖为例子而引入，故又称为“兔子数列”，指的是这样一个数列：

1、1、2、3、5、8、13、21、34……
**/

// function fibonacci(n) {
// 	let res1 = 1;
// 	let res2 = 1;
// 	let res3 = 1;
// 	for (let i = 1; i < n; i++) {
// 		res3 = res1+res2
// 		res1 = res2
// 		res2 = res3
// 	}
// 	return res3 
// }


// function fibonacci(n){
// 	if(n<=1){return 1}
// 	return fibonacci(n-1)+fibonacci(n-2)
// }
