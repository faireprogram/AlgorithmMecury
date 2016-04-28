function substring(str, substr) {
	var res = [];

	for (var i = 0; i < str.length; i++) {
		// console.log(str[i]);
		var isEqual = true;
		for (var j = 0, indexTostr = i; j < substr.length;) {
			// console.log('i = ', i, ' indexTostr=', indexTostr, ' @', str[indexTostr], ' j=', j, ' @', substr[j]);
			if (indexTostr < str.length && str[indexTostr] === substr[j]) { // indexTostr
				j++;
				indexTostr++;
			} else {
				isEqual = false;
				break;
			}
		}
		if (isEqual) {
			res.push(i);
		}
	}

	return res.length ? res : null;

}


console.log(substring("dxxaaaaxxxaaxaaa", "aaa"));