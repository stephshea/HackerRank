'use strict';
const fs = require('fs');
process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString = '';
let currentLine = 0;
process.stdin.on('data', inputStdin => {
	inputString += inputStdin;
});
process.stdin.on('end', _ => {
	inputString = inputString.trim().split('\n').map(str => str.trim());
	main();
});

function readLine() {
	return inputString[currentLine++];
}
/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
	/*
	 * Write your code here.
	 */
	s = s.split(":");
	for (var i = 0; i < s.length; i++) {
		var hour = parseInt(s[0]);
		if (s[2].includes('AM') && hour === 12) {
			return "00" + ":" + s[1] + ":" + s[2].replace(/AM/g, '');
		} else if (s[2].includes('AM') && hour < 12) {
			return "0" + hour + ":" + s[1] + ":" + s[2].replace(/AM/g, '');
		} else if (s[2].includes('AM') && hour !== 12) {
			return hour + ":" + s[1] + ":" + s[2].replace(/AM/g, '');
		} else if (s[2].includes('PM') && hour === 12) {
			return hour + ":" + s[1] + ":" + s[2].replace(/PM/g, '');
		} else {
			return (hour + 12) + ":" + s[1] + ":" + s[2].replace(/PM/g, '');
		}
	}
}

function main() {
	const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
	const s = readLine();
	let result = timeConversion(s);
	ws.write(result + "\n");
	ws.end();
}