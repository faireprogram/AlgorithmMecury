

function Queue() {

	var inStack = [];
	var outStack = [];

	var _enqueue = function (val) {
		inStack.push(val);
	};

	var _dequeue = function () {
		if(!outStack.length) {
			while(inStack.length) {
				outStack.push(inStack.pop());
			}
		}


		
		return outStack.pop();
	} 

	return {
		enqueue: _enqueue,
		dequeue: _dequeue
	};
}

var queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());
queue.enqueue(3);
console.log(queue.dequeue());
console.log(queue.dequeue());