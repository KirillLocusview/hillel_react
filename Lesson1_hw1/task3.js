let arr = [1, 2, 3, 4, 5];
console.log(sqrtSum(arr));

function sqrtSum(arrayOfNumbers) {
	return arrayOfNumbers.reduce((sum, current) => sum + current * current, 0);
}
