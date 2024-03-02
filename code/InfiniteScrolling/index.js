window.onload = function () {
	let data = [];
	const viewport = document.querySelector("#viewport");
	const dataList = document.querySelector("#dataList");
	const viewportHeight = viewport.clientHeight;
	let loading = false;

	const renderData = () => {
		const frag = document.createDocumentFragment();
		data.forEach((element) => {
			const divNode = document.createElement("div");
			divNode.innerHTML = `dataItem${element}`;
			frag.appendChild(divNode);
		});
		dataList.appendChild(frag);
	};

	const loadData = () => {
		if (!loading) {
			console.log("add");
			loading = true;
			let timer = setTimeout(() => {
				data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
				renderData();
				loading = false;
				clearTimeout(timer);
			}, 1000);
		}
	};

	loadData();

	viewport.addEventListener("scroll", () => {
		// console.log("scrollTop", viewport.scrollTop);
		// console.log("scrollHeight", viewport.scrollHeight);
		if (viewport.scrollTop + viewportHeight > viewport.scrollHeight - 5) {
			loadData();
		}
	});
	
};
