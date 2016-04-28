var root = require('../Node').root;

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


function mirrorConvert(layer) {
	if(!layer || !layer.length) {
		return;
	}
	var nextLayer = [];

	//swap right -> left
	layer.forEach(function(item) {
		if(item.left) {
			nextLayer.push(item.left);
		}
		if(item.right) {
			nextLayer.push(item.right);
		}

		//swap left, right under item
		var temp = item.left;
		item.left = item.right;
		item.right = temp;
	});

	mirrorConvert(nextLayer);
}

traverNodeBFS([root]);

console.log('\n\nTransfer xxxxxxxxxxxxxxxxx');
mirrorConvert([root]);
traverNodeBFS([root]);



