var sroot = require('../Node').sroot;

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


function isSymmetricTree(layer) {
	// left == right
	// left.left == right.right; left.right == right.right
	if(!layer || !layer.length) {
		return;
	}

	var nextLayer= [];
	if(layer.length % 2 !== 0 && layer.length != 1) {
		return false;
	}

	//current layer is sysmetric?
	var leftIndex = 0, rightIndex = layer.length - 1;
	var isSymmetric = true;

	while(leftIndex <= rightIndex) {
		var left_lval = layer[leftIndex].left ? layer[leftIndex].left.val : null;
		var left_rval = layer[leftIndex].right ? layer[leftIndex].right.val : null;
		var right_lval = layer[rightIndex].left ? layer[rightIndex].left.val : null;
		var right_rval = layer[rightIndex].right ? layer[rightIndex].right.val : null;
		
		if(left_lval !== right_rval 
		  || left_rval !== right_lval ) {
			isSymmetric = false;
			return false;
		}

		leftIndex++;
		rightIndex--;
	}

	layer.forEach(function(item) {
		if(item.left) {
			nextLayer.push(item.left);
		}
		if(item.right) {
			nextLayer.push(item.right);
		}
	});

	var result = isSymmetricTree(nextLayer);
	return result !== false ? true : false;

}

function recursiveSymmetric(left, right) {
	//root.left == root.right
	//root.right == root.left
	//left == right?
	var leftval = left ? left.val : null;
	var rightval = right ? right.val : null;
	
	if(!left && !right) {
		return true;
	}	
	var leftEqualRight;
	if(leftval == rightval) {
		return recursiveSymmetric(left.left, right.right) && recursiveSymmetric(left.right, right.left);
	} else {
		return false;
	}
}

// console.log(isSymmetricTree([sroot]));
console.log(recursiveSymmetric(sroot.left, sroot.right));

