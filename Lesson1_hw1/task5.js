let arr = [[3, 4, [5]], 1, 2 , 6, [7, 8], 9];
let newArr = [];
arr = toOneDimensional(arr);
console.log(newArr);

function toOneDimensional(arr) {
	for (let el of arr)
		el instanceof Array ? toOneDimensional(el) : newArr.push(el);
	return newArr;
}
