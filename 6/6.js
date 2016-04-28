function roatearray(arr, k) {
	// [1,2,3,4,5] & k = 2 => [4,5,1,2,3]
	// [4,2,(3),1,5]
	// [4,5,3,1,2]
	// [4,5,1,2,3]
	// swap the back-end to front-end
	var leftIndex = 0,
		rightIndex = k;

	var tmp;
	while (leftIndex < k && rightIndex < arr.length) {
		tmp = arr[leftIndex];
		arr[leftIndex] = arr[rightIndex];
		arr[rightIndex] = tmp;
		leftIndex++;
		rightIndex++;
	}
	console.log('arr => ', arr);
	console.log('leftIndex', leftIndex);

	if(leftIndex <= k) {
		var abs = 0;
		var maxAbs = k - leftIndex;
		while(abs < maxAbs) {
			console.log('abs =', abs, ' element from ', leftIndex, arr.length - 1 - abs);
			// move from right {arr.length - 1} to left {leftIndex}			
			var tmp = arr[leftIndex];
			var index = leftIndex + 1;
			while(index < arr.length) {
				arr[index - 1] = arr[index];
				index++;
			}

			arr[arr.length - 1] = tmp;

			console.log('changed ', arr);
			abs++;
		}
	}

	console.log('rightIndex', rightIndex);

	if(rightIndex < arr.length) {
		var abs = 0;
		var maxAbs = arr.length - 1 - rightIndex;
		while(abs <= maxAbs) {
			 console.log('abs =', abs, ' element from ', rightIndex, k + abs);
			// console.log('abs <= arr.length - 1 - rightIndex', abs, arr.length - 1 - rightIndex);

			tmp = arr[rightIndex];
			// k + abs, move to rightIndex
			var index = rightIndex;
			while(index > (k + abs)) {
				arr[index] = arr[index - 1];
				index--;
			}

			arr[k + abs] = tmp;
			rightIndex++;
			abs++
		}
	}

	console.log(arr);

	//swap the front-end to back-end
}

var arr = [1,2,3,4,5,6,7,8,9,15];
roatearray(arr, 8);