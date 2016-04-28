function Node(val, left, right) {
	var left = left || null // left
	var right = right || null; // right
	var val = val;

	return {
		left: left,
		right: right,
		val: val
	};
}


// =====================================================
var right1 = new Node('right1');
var right2 = new Node('right2');

var left1 = new Node('left1');
var left2 = new Node('left2');

var left = new Node('left', left1, left2);
var right = new Node('right', right1, right);

var root = new Node('root', left, right);

// Symmetric Tree  =====================================
var leaf1 = new Node('3');
var leaf2 = new Node('4');
var leaf3 = new Node('3');
var leaf4 = new Node('4');
var sleft = new Node('2', leaf1, leaf2);
var sright = new Node('2', leaf4, leaf3);
var sroot = new Node('1', sleft, sright);

// LinkedList ==========================================

var dumyHead = new Node('dumy');

var node1 = new Node('node1');
var node2 = new Node('node2');
var node3 = new Node('node3');

dumyHead.right = node1;
node1.right = node2;
node2.right = node3

// Maxroot ============================================
var mleave0_0 = new Node('mleave0_0');
var mleave0 = new Node('mleave0', mleave0_0, null);
var mleave1 = new Node('mleave1');
var mleave3 = new Node('mleave3');
var mleave4 = new Node('mleave4');

var mleave5 = new Node('mleave5');
var mleave6 = new Node('mleave6');
var mleave7 = new Node('mleave7');
var mleave8 = new Node('mleave8');

var mleftv1 = new Node('mleftv1', mleave0, mleave1);
var mleftv2 = new Node('mleftv2', mleave3, null);

var mrightv1 = new Node('mrightv1', mleave5, mleave6);
var mrightv2 = new Node('mrightv2', mleave7, mleave8);

var mright = new Node('mright',mrightv1 , mrightv2);
var mleft = new Node('mleft', mleftv1, mleftv2);
// var mright = new Node('mright', null, null);
// var mleft = new Node('mleft', null, null);
var maxroot = new Node('maxroot', mleft, mright);



// LinkedList ==========================================

var dumyHead1 = new Node('dumy1');

var node4 = new Node('node4');
var node5 = new Node('node2');
var node6 = new Node('node6');

dumyHead1.right = node4;
node4.right = node5;
node5.right = node6

// CycledList  =========================================
var cnode3 = new Node('cnode3', null, null);
var cnode2 = new Node('cnode2', null, cnode3);
var cnode1 = new Node('cnode1', null, cnode2);
var cycleroot = new Node('head', null, cnode1);
cnode3.right = cycleroot;

module.exports.Node = Node;

module.exports.root = root;
module.exports.maxroot = maxroot;
module.exports.sroot = sroot;
module.exports.listHead = dumyHead;
module.exports.listHead1 = dumyHead1;
module.exports.cycleroot = cycleroot;
