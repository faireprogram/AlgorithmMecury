function pushToArray(arr, newItem, map) {
	if(!map[newItem]) {
		arr.push(newItem);
		map[newItem] = true;
	}
}

function mergeTwoSortedArray(arr1, arr2) {

	var i = 0,
		j = 0;
	var newArr = [];
	var map = {};
	while(i < arr1.length || j < arr2.length) {
			if(i < arr1.length) {
				map[arr1[i]] = false;
				i++;
			}
			if(j < arr2.length) {
				map[arr2[j]] = false;
				j++;
			}
	}

	i = j = 0;

	while (i < arr1.length || j < arr2.length) {
		if (i < arr1.length && j < arr2.length) {
			if (arr1[i] < arr2[j]) {
				pushToArray(newArr, arr1[i], map);
				i++;
			} else {
				pushToArray(newArr, arr2[j], map);
				j++;
			}
		}


		if (i >= arr1.length && j < arr2.length) {
			pushToArray(newArr, arr2[j], map);
			j++;
		}

		if (i < arr1.length && j >= arr2.length) {
			pushToArray(newArr, arr1[i], map);
			i++;
		}
	}
	return newArr;
}


function isNumber(s) {
	var isnumber = true;
	var pointCount = 0;
	for(var i = 0; i < s.length; i++) {
		if(pointCount > 1) {
			isnumber = false;
			break;
		}
		if(s[i] == '.') {
			pointCount++;
		} else if(s[i] >= '0' && s[i] <= '9') {
			continue;
		} else {
			isnumber = false;
			break;
		}
	}
	return isnumber;
}


// console.log(mergeTwoSortedArray([1, 2, 2, 3, 5, 7, 8], [3, 4, 4, 7]));

// [1,2,2,3,5,7,8] [3,4,4,7]
// isNumber('1.0200')

console.log(isNumber('1.0200'));


// [arr1, arr2]