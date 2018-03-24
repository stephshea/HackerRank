function processData(input) {
var sEven = []
var sOdd = [];
var stringArray = input.split('\n');
for (var i = 1; i < stringArray.length; i++) {
	for (var n = 0; n < stringArray[i].length; n++) {
		if (n % 2 === 0) {
			sEven.push(stringArray[i][n]);
		} else {
			if (n % 2 != 0) {
				sOdd.push(stringArray[i][n]);
			}
		}
	}
	console.log(sEven.join('') + " " + sOdd.join(''));
	var sEven = []
	var sOdd = [];
}
}