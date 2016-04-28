function findCommonElements(arr1, arr2) {
	// Map 
	var arrCommon = [];
	var map = {};
	for(var i = 0; i < arr1.length; i++) 
		for(var j = 0; j < arr2.length; j++) {
			if(arr1[i] === arr2[j] && !map[arr1[i]]) {
				arrCommon.push(arr1[i]);
				map[arr1[i]] = true;
			}
		}

	return arrCommon;
}

console.log(findCommonElements([1,2,3,5], [2,4,6,4]));