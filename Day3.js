function main() {
    var N = parseInt(readLine());
    
if(N%2 !=0) {
    console.log('Weird');
} else if(N%2 === 0 && N>1 && N <6) {
    console.log('Not Weird');
} else if
(N%2 ===0 && N>7 && N <21) {
    console.log('Weird');
    
} else {
    console.log('Not Weird');
}
}