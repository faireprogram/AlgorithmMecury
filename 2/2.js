
function recursiveAdd(intVar) {
	if(!intVar) {
		return 0;
	}
	var lastDigit = intVar - parseInt(intVar / 10) * 10 ;
	return lastDigit + recursiveAdd(parseInt(intVar / 10));
}


console.log(recursiveAdd(1435123));