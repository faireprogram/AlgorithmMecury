function move(arr) {
	var move = arr[0];
	var steps = [0];

	for (var currentPositon = 0; currentPositon < arr.length; ) {
		var maxMove;
		var tmpMax;

		//find max move from currentposition ~ arr[currentposition]

		for (var i = currentPositon; i <= currentPositon + arr[currentPositon]; i++) {
			if (!maxMove || (i + arr[i]) > maxMove) {
					maxMove = i + arr[i];
					tmpMax = i;
			}
		}

		// console.log('tmpMax=', tmpMax, ' maxMove=', maxMove);
		steps.push(tmpMax);

		if(maxMove > arr.length) {
			return steps;
		} else if(maxMove <= arr[currentPositon] + currentPositon && maxMove < arr.length) {
			//check max move <= arr[currentposition] + curcrentpostion, deadlock or cycle
			return 0;
		} 

		//move on to the 
		currentPositon = tmpMax;
	}

	return steps;
}

// console.log(move([2, -1, 1, 3, 2]));

console.log(move([1, 1,1, 1, 3, 2]));
