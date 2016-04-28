var listHead = require('../Node').listHead;

function iteratelist(listHead) {
	var current = listHead;
	while(current) {
		console.log(current.val);
		current = current.right;
	}
}

function reverselist(listHead) {
	var current = listHead;
	var stack = [];
	stack.push(listHead);

	while(current) {
		current = current.right;
		if(current) {
			stack.push(current);
		}
	}

	var last, prelast, newHead;
	while(stack.length) {

		last = stack.pop();
		//logic
		if(!newHead) {
			newHead = last;
		}

		if(prelast) {
			prelast.right = last;
			last.right = null;
		}

		//prelast, last
		prelast = last;
	}

	return newHead;
}



iteratelist(reverselist(listHead));