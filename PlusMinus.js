'use strict';

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

// Complete the plusMinus function below.
function plusMinus(arr) {
    var tempNeg = 0;
    var tempPos = 0;
    var tempZero = 0;
    // console.log(n);
    for(var i = 0; i < arr.length; i++)
        {
            if(arr[i] < 0){
                tempNeg = tempNeg + 1;
            }
                
            else if(arr[i] ===0){
                tempZero = tempZero +1;
            }
            else if(arr[i] > 0)
            {
                tempPos = tempPos + 1;
            }   
        }
    // return(parseFloat(tempPos/n));
    // return(pareseFloat(tempNeg/n));
    // return parseFloat(tempZero/n);
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}
