function findSecondLargest(arr) {
	if (arr.length < 2) {
		return -1;
	}
	var max = arr[0];
	for (var i in arr) {
		max = arr[i] >= max ? arr[i] : max;
	}

	var secondMax;
	for (var i in arr) {
		if (arr[i] === max) {
			continue;
		}
		secondMax = !secondMax ? arr[i] : arr[i] >= secondMax ? arr[i] : secondMax;

	}

	return secondMax;
}

function exchangeBySort(start, end, arr, comparable) {

	var startIndex = start,
		endIndex = end;
	var pivot = Math.floor((start + end) / 2);

	while (startIndex < endIndex) {

		while (startIndex < pivot) {
			if (comparable(arr[startIndex], arr[pivot])) {
				startIndex++;
			} else {
				break;
			}
		}

		while (pivot <= endIndex) {
			if (comparable(arr[pivot], arr[endIndex])) {
				endIndex--;
			} else {
				break;
			}
		}

		var tmp = arr[startIndex];
		arr[startIndex] = arr[endIndex];
		arr[endIndex] = tmp;

		startIndex++;
		endIndex--;
	}

	return arr;
}

var defaultComparable = function(a, b) {
	return a < b;
}



function quickSort(start, end, arr, comparable) {
	//
	if (!arr || !arr.length) {
		return [];
	}

	if (arr.length == 1) {
		return arr;
	}

	if (end - start <= 1) {
		exchangeBySort(start, end, arr, comparable);
		return arr;
	}


	var pivot = Math.floor((start + end) / 2);

	// root
	exchangeBySort(start, end, arr, comparable);

	// sort between pivot, from start to pivot
	quickSort(start, pivot, arr, comparable);

	// sort between pivot, from pivot to end
	quickSort(pivot, end, arr, comparable);

	return arr;
}

function sort(arr, comparable) {
	var fn = comparable || defaultComparable;
	return quickSort(0, arr.length - 1, arr, fn);
}

var arr = [5, 4, 6, 7, 1, 10,9,11,11];
// console.log(sort(arr));

console.log(sort(arr));

// var arr = [10,5,4,6,7,1,1];
// console.log(sort(arr));