// PART ONE
var alphabetSoup = function(str) {
	var strarr = str.split("");
	var alphabetized = strarr.sort().join('');
	return alphabetized;
}

console.log(alphabetSoup("hello"));

// PART TWO
var vowelCount = function(str) {
	var strarr = str.toLowerCase().split("");
	var vowels = ['a', 'e', 'i', 'o', 'u'];
	var totalvowels = 0;
	for (var i = 0; i < strarr.length; i++) {
		if (vowels.indexOf(strarr[i]) > -1) {
			totalvowels++;
		}
	}
	return totalvowels;
}

console.log(vowelCount("All cows eat grass"));

// PART THREE
var coinDeterminer = function(num) { 
	var total = [];
	var denominations = [1, 5, 7, 9, 11];
	for (var i = 0; i < num + 1; i++) {
		total.push(Infinity);
	}
	total[0] = 0;
	for (var i = 0; i < denominations.length; i++) {
		for (var j = 0; j < num + 1; j++) {
			if (j >= denominations[i]) {
				total[j] = Math.min(total[j], 1 + total[j-denominations[i]]);
			}
		}
	}
	return total[num];
}
console.log(coinDeterminer(16));
console.log(coinDeterminer(25));
