
let arr = [1, 4, 2, 6, 12, 34, 5, 6, 9, 8, 10];

for (let j = 0; j < arr.length; j++) {
	for (let i = 0; i < arr.length-j; i++) {
		let c = 0;
		if (arr[i] > arr[i + 1]) {
			c = arr[i];
			arr[i] = arr[i + 1];
			arr[i + 1] = c;
		}
	}	
}


console.log(arr);
