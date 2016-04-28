

function findPrime(n) {
	var result  = [];
	result[0] = 2;
	for(var i = 3; i < n;) {
		var isPrime = true;
		for(var j = 0; j*j < result.length; j++) {
			if(i % result[j] == 0) {
				isPrime = false;
				break;
			}
		}

		if(isPrime) {
			result.push(i);
		}

		i = i + 2;
	}

	return result;
}

console.log(findPrime(5000000));