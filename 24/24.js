var Node = require('../Node').Node;

var node1 = new Node('Node1');
var node2 = new Node('Node2');
var node3 = new Node('Node3');
var node4 = new Node('Node4');

node1.right = node2;
node2.right = node3;
node3.right = node4;
node4.left = node3;
node3.left = node2;
node2.left = node1;


function doubleLinkList(head) {
	// from front -> end
	var head1 = head;
	while (head1) {
		console.log(head1.val);
		head1 = head1.right;
	}


	var head2 = head;
	while (head2) {
		head2 = head2.right;
		if(!head2.right) {
			break;
		}
	}

	console.log('--------------------------------');
	while (head2) {
		console.log(head2.val);
		head2 = head2.left;
	}


	// from end -> front


}

doubleLinkList(node1);