var listHead = require('../Node').listHead;
var listHead1 = require('../Node').listHead1;

function defaultcomparable(val1, val2) {
	return val1 == val2;
}

function iteratelist(listHead) {
	var current = listHead;
	while (current) {
		console.log(current.val);
		current = current.right;
	}
}

// iteratelist(listHead);
// iteratelist(listHead1);

////////////////////////////////////////////////////////////////

function mergetwolist(listHead1, listHead2, comparable) {
	var newDumyHead = {
		right: null,
		val: 'empty'
	};

	var comparable = comparable || defaultcomparable;

	var map = {};
	var current1 = listHead1;
	var current2 = listHead2;
	var currentNew = newDumyHead;

	while (current1.right || current2.right) {

		if (!map[current1.val]) {

			currentNew.right = current1;
			currentNew = currentNew.right;
			map[current1.val] = true;
		}

		if (current1.right) {
			current1 = current1.right;
		}

		if (!map[current2.val]) {
			currentNew.right = current2;
			currentNew = currentNew.right;
			map[current2.val] = true;
		}

		if (current2.right) {
			current2 = current2.right;
		}
		
	};

	return newDumyHead.right;
}

// mergetwolist(listHead, listHead1);

iteratelist(mergetwolist(listHead, listHead1));