// PART 1
var secondGreatLow = function(arr) {
	var secondlowest = "";
	var secondhighest = "";
	arrasc = arr.sort(function(a, b) {
		return a-b
	})
	if (arrasc.length <= 2) {
		secondlowest = arrasc[0].toString();
		secondhighest = arrasc[1].toString();
	}
	else {
		var i = 0
		var j = arrasc.length - 1;
		if (arrasc[i + 1] == arrasc[i]) {
			while (arrasc[i + 1] == arrasc[i]) {
				i++;
				secondlowest = arrasc[i + 1].toString();
			}
		}
		else {
			secondlowest = arrasc[1].toString();
		}
		if (arrasc[j - 1] == arrasc[j]) {
			while (arrasc[j - 1] == arrasc[j]) {
				j--;
				secondhighest = arrasc[j - 1].toString();
			}
		}
		else {
			secondhighest = arrasc[j - 1].toString();
		}
	}
	return (secondlowest + " " + secondhighest);
}

var arr = [7, 7, 12, 98, 106];
console.log(secondGreatLow(arr));

// PART 2
var timeConvert = function(mins) {
	var hours = Math.floor(mins/60).toString();
	var min = (mins%60).toString();
	if (min < 10) {
		min = "0" + min;
	}
	return (hours + ":" + min);
}

var mins = 63;
console.log(timeConvert(mins));

// PART 3
var bracketMatcher = function(str) {
	var openbracket = 0;
	var closebracket = 0;
	var strarr = str.split("");
	for (var i = 0; i < str.length; i++) {
		if (strarr[i] == "(") {
			openbracket++;
		}
		if (strarr[i] == ")") {
			closebracket++;
		}
	}
	if (openbracket == closebracket) {
		return true;
	}
	else {
		return false;
	}
}

var case1 = "(hello (world))";
var case2 = "((hello (world))";

console.log("case 1 --> " + bracketMatcher(case1));
console.log("case 2 --> " + bracketMatcher(case2));


