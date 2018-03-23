function readLine() {
	return input_stdin_array[input_currentline++];
}
/////////////// ignore above this line ////////////////////
function main() {
	var n = parseInt(readLine());
	for (var i = 1; i <= 10; i++) {
		var result = n + ' x ' + i + ' = ' + n * i;
		console.log(result);
	}
}