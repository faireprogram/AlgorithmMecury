function reverseInteger(intVal) {

	var _reverseInteger = function(intVal) {
		if (intVal % 1 != 0) {
			return false;
		}

		if (intVal < 10) {
			return intVal;
		}


		var d1 = intVal % 10;
		return d1 + '' + _reverseInteger(parseInt(intVal / 10));
	}

	return parseInt(_reverseInteger(intVal));
}

console.log(reverseInteger(10005));