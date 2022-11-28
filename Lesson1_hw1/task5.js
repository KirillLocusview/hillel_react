let arr = [1, 2, [3, 4, [5]], 6, [7, 8], 9];
const newArr = toOneDimensional(arr);
console.log(newArr);

function toOneDimensional(arr) {
	let funcArray = [];
	arr.forEach((el) => {
		if (Array.isArray(el)) funcArray = funcArray.concat(toOneDimensional(el));
		else funcArray.push(el);
	});

	return funcArray
}
