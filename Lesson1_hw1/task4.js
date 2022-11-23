function compareArrays(arr1, arr2) {
	if (arr1.length != arr2.length) return false;
	let arrStr = JSON.stringify(arr1);
	let arrStr2 = JSON.stringify(arr2);
	return arrStr === arrStr2 ? true : false;
}

function compareArrays2(arr1, arr2) {
	if (arr1.length != arr2.length) return false;
	for (let i = 0; i < arr1.length; i++) {
		if (arr1[i] != [arr2]) {
			return false;
		}
	}
	return true;
}
