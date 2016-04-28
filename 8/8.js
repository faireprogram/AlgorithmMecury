function findTwoUnique(arr) {
	var n = arr.length - 2;
	var originDiff;
	for(var i = 1; i <= n; i++) {
		originDiff = originDiff ? originDiff ^ i : i;
	}

	console.log('originDiff', originDiff);

	var arrDiff;
	for(var i = 0; i < arr.length; i++) {
		arrDiff = arrDiff ? arr[i] ^ arrDiff : arr[i];
	}

	var allDiffs = originDiff ^ arrDiff;

	var firstDiffPos = allDiffs & ~(allDiffs - 1);

	var newArr = [[], []];
	for(var i = 0; i < arr.length; i++) {
		if((arr[i] & firstDiffPos) === 0) {
			newArr[0].push(arr[i]);
		} else {
			newArr[1].push(arr[i]);
		}
	}
	var result = [];

	originDiff = null;
	arrDiff = null;
	for(var i = 0; i < newArr[0].length; i++) {
		originDiff = originDiff ? newArr[0][i] ^ originDiff : newArr[0][i];
	}; 

	for(var i = 1; i <= n; i++) {
		if((firstDiffPos & i) === 0 ) {
			arrDiff = arrDiff ? i ^ arrDiff : i;
		}
	};

	result[0] = originDiff ^ arrDiff;

	originDiff = null;
	arrDiff = null;
	for(var i = 0; i < newArr[1].length; i++) {
		originDiff = originDiff ? newArr[1][i] ^ originDiff : newArr[1][i];
	}; 

	for(var i = 1; i <= n; i++) {
		if((firstDiffPos & i) !== 0 ) {
			arrDiff = arrDiff ? i ^ arrDiff : i;
		}
	};

	result[1] = originDiff ^ arrDiff;

	return result;
}



console.log(findTwoUnique([1,2,3,3,4,5,5]));