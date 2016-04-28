function checkUniqueString(s, c) {
	var count = 0;
	for(var i in s) {
		if(s[i] == c) {
			count++;
		}
		if(count >= 2) {
			return false;
		}
	}

	return true;
}


console.log(checkUniqueString('123124', '3'));