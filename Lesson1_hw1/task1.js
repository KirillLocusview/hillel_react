let str = "What is the average airspeed velocity of an unladen swallow";
console.log(findLongestWord(str));

function findLongestWord(string) {
	str = string.split(" ");
	str.sort(checkLength);

	return str[0];
}

function checkLength(word1, word2) {
	if (word1.length > word2.length) return -1;
	if (word1.length < word2.length) return 1;
	if (word1.length === word2.length) return 0;
}
