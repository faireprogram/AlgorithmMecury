
function fibonachi(n) {
	var arr = [];
	arr[0] = 1;
	arr[1] = 2;
	for(var i = 2; i <=n ; i++) {
		arr[i] = arr[i-2] + arr[i-1];
	}
	return arr;
}

function findLength(n) {
	if(n == 2) {
		return 3;
	} 
	if(n == 1) {
		return 1;
	}

	return findLength(n-1) + findLength(n-2);
}

function dpFindLength(n) {
	var arr = [];
	arr[1] = 1;
	arr[2] = 3;

	for(var i = 3; i <= n ; i++) {
		arr[i] = arr[i-1] + arr[i-2];
	}
	return arr[n];

}

console.log(dpFindLength(15));