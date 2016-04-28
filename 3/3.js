// tree structure
// function Node() {}
// left, right

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

var right1 = new Node('right1');
var right2 = new Node('right2');

var left1 = new Node('left1');
var left2 = new Node('left2');

var left = new Node('left', left1, left2);
var right = new Node('right', right1, right2);

var root = new Node('root', left, right);


function traverNodeDFS(root) {
	if (!root) {
		return;
	}
	console.log(root.val);

	if (root.left) {
		traverNodeDFS(root.left);
	};

	if (root.right) {
		traverNodeDFS(root.right);
	};
}


function traverNodeBFS(layer) {
	var nextLayer = [];

	if (!layer || layer.length == 0) {
		return;
	}

	for (var i in layer) {
		console.log(layer[i].val);

		if (layer[i].left) {
			nextLayer.push(layer[i].left);
		}
		if (layer[i].right) {
			nextLayer.push(layer[i].right);
		}
	}

	traverNodeBFS(nextLayer);
}


function traverseNodeLoop(root) {
	var stack = [];

	var current = root;
	var pop = false;
	stack.push({node: root, visited: false});
	// length 
	// currentnode = nodes_to_visit.first();
	// nodes_to_visit.prepend( currentnode.children );
	while (stack.length) {
		//console.log('stack', stack);
		current = stack[stack.length - 1];
		 // console.log('stack', stack);

		if(!current.node) {
			stack.pop();
			continue;
		}

		if(current.visited) {
			var node = stack.pop();
			console.log(node.node.val);
			continue;
		}

		current.visited = true;
		stack.push({node: current.node.right, visited: false});
		stack.push({node: current.node.left, visited: false});
	}
}

// traverNodeDFS(root);
// console.log('=======================================');
// traverNodeBFS([root]);

traverseNodeLoop(root);