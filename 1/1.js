
// initial state: str[0]
// longest: MaxSubString, start, end, size

// 1: last not find, max whole string i 
// 2: last find 
//	  1) i - prevFindIndex : prevMax(start, end, length)


//@return string 
function findLongestUniqueString(str) {
	var visitedMap = {};
	var max = {
		start : 0,
		end : 0,
		length : 1
	};

	var pre_cur = -1;

	for(var i = 0; i < str.length; i++) {
		if(visitedMap[str[i]]) { // last find
			//console.log(str[i], visitedMap[str[i]]);
			pre_cur = visitedMap[str[i]] > pre_cur ? visitedMap[str[i]] : pre_cur;

			// the new end charater makes up a new longest substring
			if(i - pre_cur >= max.length) {
				max.start = pre_cur + 1;
				max.end = i;
				max.length = max.end - max.start + 1;
			}
			
		} else { // not found
			if(pre_cur != -1) {
				max.start = pre_cur + 1;
			}

			max.end = i;
			max.length = max.end - max.start + 1;
		}

		// keep the char in the visitedMap
		visitedMap[str[i]] = i;
		console.log('pre_cur', pre_cur, str[i]);
		console.log('visitedMap + max', visitedMap, max);
	}

	return str.substring(max.start, max.end + 1);
}


//test

console.log(findLongestUniqueString('GEEKSFORGEEKS'));
