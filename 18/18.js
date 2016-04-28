
function isRecusivePalindrome(s) {

	if(s.length == 1) {
		return true;
	} 
	if(s.length == 2) {
		return s[0] == s[1];
	}
	if(s[0] != s[s.length - 1]) {
		return false;
	}
	return isRecusivePalindrome(s.substring(1, s.length - 1));
}

function isNonRecursivePalindrome(s) {

	var i = 0, j = s.length - 1;
	while(i < j) {
		if(s[i] == s[j]) {
			i++;
			j--;
			continue;
		} else {
			return false
		}
	}
	return true;
}



console.log(isRecusivePalindrome('abccxba'));
console.log(isNonRecursivePalindrome('abcxba'));