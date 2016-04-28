

function reverseString(str) {

	var arr = str.split('');

	for(var i = 0; i < arr.length; i++) {

		var tmp = arr[0];

		for(var j = 1; j < arr.length; j++) {
			arr[j - 1] = arr[j];
		}

		arr[arr.length - 1] = arr[0];

		// console.log(arr);
	}

	return arr.join('');
}


console.log(reverseString('abcaaax'));