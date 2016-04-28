function isPemutation(s1, s2) {
	if(s1.length != s2.length) {
		return false;
	}
	var map1 = {};
	var map2 = {};

	for(var i in s1) {
		if(!map1[s1[i]]) {
			map1[s1[i]] = 0;
		} else {
			map1[s1[i]] = map1[s1[i]] + 1;
		}
	}

	for(var i in s2) {
		if(!map2[s2[i]]) {
			map2[s2[i]] = 0;
		} else {
			map2[s2[i]] = map2[s2[i]] + 1;
		}
	}

	for(var i in s1) {
		if(map1[s1[i]] !== map2[s1[i]]) {
			return false;
		}
	}
	return true;
}


console.log(isPemutation('1122334455', '55443322111'));