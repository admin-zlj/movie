var input = document.getElementById('input')
		
		input.oninput = debounce(function (e) {
			console.log(this.value);
		}, 500)
		function debounce(fn, delay) {
			var time = null
			return function (...arguments) {
				clearTimeout(time)
				time = setTimeout(() => {
					fn.apply(this,...arguments)
				}, delay);
			}
		}
		
		window.onscroll =throttle(function(){
			console.log('222');
		},1000)
		
		function throttle(fn,delay){
			let flag = true
			return function(...arguments){
				if(flag){
					setTimeout(() => {
						fn.apply(this,...arguments)
						flag=true
					}, delay);
				}
				flag=false
			}

		}


		010-12345678
		111-10010
		110-110
		res = /^ \d{3}-(\d{8}|10010|110) /g