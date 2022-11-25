let arr = ["aa", "xy", "zz", "cd", "zz", "rt", "aa", "ww"];
arr = arr.reduce(function (arrTmp, item) {
	if (!arrTmp.includes(item)) arrTmp.push(item);
	return arrTmp;
}, []);
