
function findMin(arr) {
	var min = arr[0];
	arr.forEach(function(item) {
		min = min < item ? min : item;
	});

	return min;
}

console.log(findMin([1,2,3,4,7]));