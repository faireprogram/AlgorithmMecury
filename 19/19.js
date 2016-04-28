function findDuplicate(arr) {
	var map = {};
	for(var i = 0; i < arr.length; i++) {
		if(!map[arr[i]]) {
			map[arr[i]] = true;
		}
	}
	var keys = Object.keys(map);
	var xorVal;
	for(var j in keys) {
		xorVal = xorVal ? xorVal^keys[j]^keys[j] : keys[j]^keys[j];
 	}

 	var xorVal1;
 	for(var i = 0; i < arr.length; i++) {
		xorVal1 = xorVal1 ? xorVal1^arr[i] : arr[i];
	}

	return xorVal^xorVal1;
}


console.log(findDuplicate([3,3,4,5,4,5,6]));