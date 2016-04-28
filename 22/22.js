var cycleroot = require('../Node').cycleroot;

function iteratelist(listHead) {
	var current = listHead;
	while(current) {
		console.log(current.val);
		current = current.right;
	}
}

function isCycle(head) {
	var slow = faster = head;

	while(true) {

		if(!faster.right) {
			return false;
		}

		if(!faster.right.right || !slow.right) {
			console.log(faster.right);
			return false;
		}

		slow = slow.right;
		faster = faster.right.right;

		if(slow.val === faster.val) {
			break;
		}
	}
	return true;
}

console.log(isCycle(cycleroot));
// iteratelist(cycleroot);