let box = document.querySelector('.box')
let windowH = window.innerHeight
// console.log(windowH);
let arr= [1,1,1,1]
let flag = true
window.addEventListener('scroll',sload)
function sload(){
	let  boxvalue =box.getBoundingClientRect().bottom
	// console.log(boxvalue);
	if (flag && boxvalue < windowH) {
		flag = false
		add()
		console.log(arr);
	}
}
function add(){
	setTimeout(() => {
		arr.push(2,2)
		flag = true
	}, 2000);
}