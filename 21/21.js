function findRotation(s, srotate) {
	if(s.length != srotate.length) {
		return false;
	}

	var i = 0;
	var j;
	for(j = 0 ; j < srotate.length; j++) {
		if(s[i] == srotate[j]) {
			while(s[i] == srotate[j]) {
				j++;
				continue;
			}
			break;
		} 
	}
	j = j - 1; 
	i = s.length - j;
	var z = 0;
	var find = true;
	while(z < j) {
		if(s[i] != srotate[z]) {
			find = false;
			break;
		}
		i++;
		z++;
	}

	return find;
	// srotate[j]
}

console.log(findRotation('abcd', 'dabc'));