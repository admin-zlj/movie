// let arr = [1,2,3,5,6,7,1,2,4,5,6,7]

//数字
//1.set
// let a=[...new Set(arr)]

//2.filter + indexOf
// let a = arr.filter((item,index,arr)=>(
// 	index==arr.indexOf(item)
// ))

//3.map + includes
//  let a=[]
//  arr.map(item=>{
// 	 if(!a.includes(item)){
// 		 a.push(item)
// 	 }
//  })

//对象数组
let arrObj = [
	{ name: "admin" },
	{ name: "zlj" },
	{ name: "xiaoming" },
	{ name: "admin" },
	{ name: "admin" },
	{ name: "zlj" },
	{ name: "admin" },
];
//Map
let wmap = new Map();
let a = [];
arrObj.map((item) => {
	if (!wmap.has(item.name)) {
		wmap.set(item.name, true);
		a.push(item);
	}
});
console.log(wmap);
console.log(a);
