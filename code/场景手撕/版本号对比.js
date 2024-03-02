//版本号对比
function versionCompare(v1, v2) {
	var v1 = v1.split('.'),
		v2 = v2.split('.');
		for (var i = 0; i < v1.length || i < v2.length; i++) {
			var a = parseInt(v1[i]) || 0,
				b = parseInt(v2[i]) || 0;
			if (a < b) return -1;
			if (a > b) return 1;
		}
		return 0;
}

console.log(versionCompare('1.1.1', '1.1.1'));