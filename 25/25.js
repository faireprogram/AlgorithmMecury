
function sortFrequency(arr) {
	
	var map = {};
	for(var i in arr) {
		if(map[arr[i]]) {
			map[arr[i]] = map[arr[i]] + 1;
		} else {
			map[arr[i]] = 1;
		}
	} // 2: 3, 1:3

	var newArr = [], finalResult = [];
	var nums = Object.keys(map);
	for(var i in nums) {
		newArr.push({num: nums[i], count: map[nums[i]]});
	}

	newArr.sort(function(a, b) {
		return a.count - b.count;
	}).forEach(function(item) {
		for(var j = 0; j < item.count; j++) {
			finalResult.push(parseInt(item.num));
		}
	});

	return finalResult;
}


console.log(sortFrequency([1,1,1,2,3,4,4,4,5]));