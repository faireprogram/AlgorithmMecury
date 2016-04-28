var root = require('../Node').listHead1;


function iterateList(dumyhead1) {
	var head = dumyhead1;
	while(head) {
		console.log(head.val);
		head = head.right;
	}
}


function reverseLinkList(root) {
	var stack = [];

	var head = root;
	while(head) {
		stack.push(head.val);
		head = head.right;
	}

	console.log(stack);

	while(stack.length) {
		var popElement = stack.pop();
		console.log(popElement);
	}
}

reverseLinkList(root);