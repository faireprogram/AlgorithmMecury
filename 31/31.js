

function compress(s) {
	var finalString = '';
	var count = 1, previous = null;
	for(var i in s) {
		if(previous === null) {
			finalString += s[i];
		} else if(previous === s[i]) {
			count++;
		} else {
			finalString += count;
			finalString += s[i];
			count = 1;
		}

		previous = s[i];
	}
	finalString += count;
	return finalString;
}


function compress1(s) {
	var finalString = '';
	var map = {};
	for(var i in s) {
		if(!map[s[i]]) {
			map[s[i]] = 1;
		} else {
			map[s[i]] = map[s[i]] + 1;
		}
	}

	var maprecord = {};
	for(var i in s) {
		if(map[s[i]] && !maprecord[s[i]]) {
			finalString += s[i] + map[s[i]];
			maprecord[s[i]] = true;
		}
	}

	return finalString;
}


// console.log(compress('aaaaabcbcddaadddccc'));

 console.log(compress1('aaabbccddaaddcc'))