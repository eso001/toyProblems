function listNode(val){
	this.val = val;
	this.next = null;
}

function linkedList(val){
	if(val){
		this.head = this.tail = new listNode(val);
	} else {
		this.head = this.tail = null;
	}
}
linkedList.prototype.addToTail = function(val){
	if(!this.head){
		this.head = this.tail = new listNode(val);
	} else if (this.head === this.tail){
		this.head.next = this.tail = new listNode(val);
	} else {
		var currentNode = this.head;
		while(currentNode.next){
			currentNode = currentNode.next;
		}
		currentNode.next = this.tail = new listNode(val);
	}
}
var Bob = new listNode(5);

Bob.next = new listNode(6);

