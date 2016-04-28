function findFrequency(arr, n) {
	var map = {};
	for(var i = 1; i <= n; i++) {
		map[i] = 0;
	}

	for(var i = 0; i < arr.length; i++) {
		if(typeof map[arr[i]] == 'number') {
			map[arr[i]] = map[arr[i]] + 1;
		}
		
	}

	return map;
}

console.log(findFrequency([1,4,5,6,6,6,7,8,9,9,10,10,10], 9));