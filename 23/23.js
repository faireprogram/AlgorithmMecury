
function pascalTriangle(n) {
	var triangle = [[1], [1,1]];
	for(var i = 2; i < n; i++) {
		var currentLayer = [];
		for(var j = 0; j < i; j++) {
			if(j == 0) {
				currentLayer.push(1);
			} else {
				currentLayer.push(triangle[i-1][j-1] + triangle[i-1][j]);
			}
		}
		currentLayer.push(1);
		triangle.push(currentLayer);
	}
	return triangle;
}

console.log(pascalTriangle(15));