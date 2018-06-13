//transformed for loop to forEach

function birthdayCakeCandles(ar) {
	ar = ar.sort(function(a, b) {
		return b - a;
	});
	var count = 0;
	ar.forEach(function(candle, index) {
		var max = ar[0];
		if (ar[index] === max) {
			count++;
		}
	});
	return count;
}

//full algorithm
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
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    // function compareNumbers(a, b) 
    //     {
    //     return b - a;
    //     }

ar = ar.sort(function(a, b) {
return b - a;
});
console.log(ar);
var count = 0;
for(var i = 0; i<ar.length; i++)
{
	if(ar[i] == ar[0])
		{
			count++;
		}


}
    return count;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine(), 10);

    const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

    let result = birthdayCakeCandles(ar);

    ws.write(result + "\n");

    ws.end();
}
