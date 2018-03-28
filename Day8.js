function processData(input) {
	//Enter your code here
	var peepArray = input.split('\n');
	//if has number  split at space
	var phoneBook = {};
	var queries = [];
	for (var i = 1; i < peepArray.length; i++) {
		if (/\d/.test(peepArray[i])) {
			var newArray = peepArray[i].split(' ');
			var name = newArray[0];
			var number = newArray[1];
			phoneBook[name] = [number];
		} else {
			queries.push(peepArray[i]);
		}
	}
	for (i = 0; i < queries.length; i++) {
		if (phoneBook[queries[i]]) {
			console.log(queries[i] + "=" + phoneBook[queries[i]]);
		} else {
			console.log('Not found');
		}
	}
}