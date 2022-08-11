class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
	}

	addFirst(value) {
		const newNode = new Node(value, this.head, null);

		if (this.head) {
			this.head.previousNode = newNode;
		} else {
			this.tail = newNode;
		}
		this.head = newNode;
	}

	addLast(value) {
		const newNode = new Node(value, null, this.tail);

		if (this.tail) {
			this.tail.nextNode = newNode;
		} else {
			this.head = newNode;
		}
		this.tail = newNode;
	}

	add(value, position) {
		console.log('Insert a new Node');
	}

	removeFirst() {
		console.log('Remove first Node');
	}

	removeLast() {
		console.log('Remove last Node');
	}

	find(value) {
		console.log('Find method');
	}
}

class Node {
	constructor(value, nextNode, previousNode) {
		this.value = value;
		this.nextNode = nextNode;
		this.previousNode = previousNode;
	}
}
