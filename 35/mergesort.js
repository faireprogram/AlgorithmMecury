function defaultComparable(a, b) {
	return a < b;
}


function merge(start, pivot, end, arr, comparable) {
	var i = start,
		j = pivot + 1;

	// [1,3,5, 2, 8]
	// [2,4]
	while (i <= pivot || j < end) {
		
		if (i <= pivot) {
			if (comparable(arr[i], arr[j])) {
				i++;
			} else {
				var tmp = arr[i];
				arr[i] = arr[j];
				arr[j] = tmp;
				i++;
			}
		} else {
			if (j < end - 1 && !comparable(arr[j], arr[j + 1])) {
				var tmp = arr[j];
				arr[i] = arr[j];
				arr[j] = tmp;
			}
			j++;
		}
	}
}

function split(start, end, arr, comparable) {
	if (end == start) {
		return;
	}

	if (end - start == 1) {
		if (!comparable(arr[start], arr[end])) {
			var tmp = arr[start];
			arr[start] = arr[end];
			arr[end] = tmp;
		}
		return;
	}

	var pivot = Math.floor((start + end)/ 2) ;
	split(start, pivot, arr, comparable);
	split(pivot + 1, end, arr, comparable);

	merge(start, pivot, end, arr, comparable);

}


function mergeSort(arr, comparable) {
	var fn = comparable || defaultComparable;
	split(0, arr.length-1, arr, fn);

	return arr;
}


var arr = [1, 3, 5, 2, 8, 8, 30, 45, 9, 9, 10];
console.log(mergeSort(arr));