// PART 1
var isNumber = function(str) {
	return Number.isInteger(parseInt(str));
}

var addNumbers = function(str) {
	var chars = str.split("");
	var total = 0;
	var i = 0
	while (i < chars.length) {
		if (isNumber(chars[i]) && isNumber(chars[i+1])) {
			total += parseInt(chars[i] + chars[i+1]);
			i += 2;
		}
		else if (isNumber(chars[i])) {
			total += parseInt(chars[i]);
		}
		i++;
	}
	return total;
}

// PART 2

var longestWord = function(str) {
	word = str.split(" ");
	wordlengths = word.map(function(word) {
		return word.length;
	})
	var max = Math.max.apply(null, wordlengths);
	return word[wordlengths.indexOf(max)];
}

// PART 3

var isLetter = function(str) {
	if (str.toLowerCase().charCodeAt(0) >= 97 && str.toLowerCase().charCodeAt(0) <= 122) {
		return true;
	}
	else {
		return false;
	}
}

var averageStringNumbers = function(str) {
	var chars = str.split("");
	var total = 0
	var totalletters = 0;
	for (var i = 0; i < chars.length; i++) {
		if (isNumber(chars[i])) {
			total += parseInt(chars[i]);
		}
		if (isLetter(chars[i])) {
			totalletters++;
		}
	}
	var average = Math.round(total / totalletters);
	return average;
}

console.log(addNumbers("88Hello 3World!"));
console.log(longestWord("Hello World!! My name is Phillip"));
console.log(averageStringNumbers("Hello6 9World 2, Nic8e D7ay!"));

var addNumbers2 = function(string){
	var words = string.split(" ")
	var result = 0
	words.forEach(function(word){
		var wordResult = []
		word.split("").forEach(function(char){
			if (parseInt(char) > 0 && parseInt(char) <= 9){
				wordResult.push(char)
			}
		})
		wordResult = wordResult.join("")
		result += Number(wordResult)
		wordResult = []
	})
	return result
}


var iterations = 1000000;
console.time('Function #1');
for(var i = 0; i < iterations; i++ ){
    addNumbers("88Hello 3World!");
};
console.timeEnd('Function #1')

console.time('Function #2');
for(var i = 0; i < iterations; i++ ){
    addNumbers2("88Hello 3World!");
};
console.timeEnd('Function #2')