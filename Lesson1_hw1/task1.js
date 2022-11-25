let str = "What is the average airspeed velocity of an unladen swallow";
console.log(findLongestWord(str));

function findLongestWord(string) {
	str = string.split(" ");
	str.sort(checkLength);

	return str[0];
}

function checkLength(word1, word2) {
	return word1.length - word2.length >= 0 ? -1 : 1;
}
