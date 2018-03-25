 function factorial(n) {
 	// Complete this function
 	if (n === 2) {
 		return 2;
 	} else if (n > 2 && n <= 12) {
 		return n * factorial(n - 1);
 	}
 }

 function main() {
 	var n = parseInt(readLine());
 	var result = factorial(n);
 	process.stdout.write("" + result + "\n");
 }