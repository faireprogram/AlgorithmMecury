function findUnique(arr) {
	var xorDiff = arr[0];
	for(var i = 1; i < arr.length; i++) {
		xorDiff ^= arr[i];
	}

	var xorSame;
	for(var i = 1; i <= (arr.length + 1); i++) {
		xorSame = xorSame ? xorSame ^ i : i;
	}

	return xorDiff ^ xorSame;
}




console.log('value is ' + findUnique([1,2,3,5]));