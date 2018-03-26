function main() {
	var n = parseInt(readLine());
	var binary = (n).toString(2);
	// console.log(n);
	var conOnes = 0;
	var max = 0;
	for (var i = 0; i < binary.length; i++) {
		if (binary[i] == 1) {
			max++;
			if (max > conOnes) {
				conOnes = max;
			}
		} else if (binary[i] == 0) {
			max = 0;
		}
	}
	console.log(conOnes);
};