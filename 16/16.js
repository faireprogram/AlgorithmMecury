var maxRoot = require('../Node').maxroot;

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

function findMaxPath(layer, path) {
	// traverNodeDFS(maxRoot);
	if(!layer || layer.length === 0) {
		return 0;
	}
	var nextLayer = [];
	layer.forEach(function(item, i) {
		if(item.left) {
			nextLayer.push(item.left);
		} 
		if(item.right) {
			nextLayer.push(item.right);
		}
	})

	return findMaxPath(nextLayer) + 1;

}

function findMinPath(layer) {
	// traverNodeDFS(maxRoot);
	if(!layer || layer.length === 0) {
		return 0;
	}
	var nextLayer = [];

	var findShortest = false;
	layer.forEach(function(item, i) {
		if(!item.left || !item.right) {
			findShortest = true;
			return 0;
		}
		if(item.left) {
			nextLayer.push(item.left);
		} 
		if(item.right) {
			nextLayer.push(item.right);
		}
	});

	if(findShortest) {
		return 0;
	}

	return findMinPath(nextLayer) + 1;

}

function getMaxPath(currentGrandFather, currentParent) {
	if(!currentParent) {
		return 0
	}

	var leftMaxPath = getMaxPath(currentParent, currentParent.left);
	var rightMaxPath = getMaxPath(currentParent, currentParent.right);

	return Math.max(leftMaxPath, rightMaxPath) + 1;
}

function concat(arr, arr2) {
	if(!arr2  && arr2.length === 0) {
		return arr;
	}

	for(var i = 0; i < arr2.length; i++) {
		arr.push(arr2[i]);
	}

	return arr;
}

function getMinPath(currentGrandFather, currentParent, path) {
	if(!currentParent || (!currentParent.left && !currentParent.right)) {
		// console.log('currentGrandFather', currentGrandFather);
		if(currentGrandFather) {
			path.push(currentGrandFather);
		}

		if(currentParent) {
			path.push(currentParent);
		}

		// console.log('currentGradFather', currentGrandFather, 'currentParent', currentParent);
		// console.log('path', path);
		return 0;
	}

	var leftPath = [];
	var rightPath = [];

	var leftMinPath = getMinPath(currentParent, currentParent.left, leftPath);
	var rightMinPath = getMinPath(currentParent, currentParent.right, rightPath);

	// console.log('leftMinPath', leftMinPath);
	// console.log('rightMinPath', rightMinPath);
	if(currentGrandFather) {
		path.push(currentGrandFather);
	}

	// console.log(leftMinPath > rightMinPath);

	if(leftMinPath > rightMinPath) {
		concat(path, leftPath);
	} else {
		concat(path, rightPath);
	}

	return Math.min(leftMinPath, rightMinPath) + 1;
}


function getMaxPath(currentParent, path) {

	if(!currentParent || (!currentParent.left && !currentParent.right)) {

		if(currentParent) {
			path.push(currentParent.val);
		}

		console.log('currentParent', path);

		return 1;
	}

	var leftPath = [currentParent.val];
	var rightPath = [currentParent.val];
	var leftMaxPath = getMaxPath(currentParent.left, leftPath);
	var rightMaxPath = getMaxPath(currentParent.right, rightPath);

	console.log('leftMaxPath : rightMaxPath', leftMaxPath , rightMaxPath);
	console.log('leftPath : rightPath', leftPath.length , rightPath.length);
	


	if(leftMaxPath >= rightMaxPath) {
		console.log('path', path, 'leftpath', leftPath);
		concat(path, leftPath);
		console.log('path', path);
	} else {
		concat(path, rightPath);
	}

	

	// console.log(currentParent.val, Math.max(rightMaxPath, rightMaxPath) + 1);
	return Math.max(leftMaxPath, rightMaxPath) + 1;
}	


// console.log(findMaxPath([maxRoot]));
// console.log(findMinPath([maxRoot]));
// console.log(getMaxPath(null, maxRoot));

// var minPath = [];
// getMinPath(null, maxRoot, minPath);
// while(minPath.length) {
// 	if(minPath.length >= 1) {
// 		console.log(minPath.shift().val + ' -> ');
// 	} else {
// 		console.log(minPath.shift().val);
// 	}
// }

// traverNodeDFS(maxRoot);

var maxPath = [];
console.log(getMaxPath(maxRoot, maxPath));
while(maxPath.length) {
	if(maxPath.length >= 1) {
		console.log(maxPath.shift());
	} else {
		console.log(maxPath.shift());
	}
}




