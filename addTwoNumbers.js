//Given two linked lists, make a new linked lists by adding their numbers together for the values of each of the corresponding nodes
//each value of the linked list will be reduced to one digit variables, so 10 will become 0, 11 will become 1;

// input: (3 -> 5 -> 8) and (5 -> 1 -> 3) 
//output: (8 -> 6 -> 1)

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
function addTwoNumbers(list1, list2){
    console.log("list1, list2", list1, list2)
	var currentNode = list1.head;
	var currentNode2 = list2.head;
	var carryOver = 0;
	var list = new linkedList();
	while(currentNode && currentNode2){
		console.log("list1 and list2 vals", currentNode.val, currentNode2.val);
		var newSum = currentNode.val + currentNode2.val + carryOver;
		carryOver = 0;
		if(newSum/10 > 1){
		    carryOver++;
		}
		newSum = newSum%10;
		console.log("this newSum", newSum);
		list.addToTail(newSum);
		currentNode = currentNode.next;
		currentNode2 = currentNode2.next;
	}
	if(carryOver === 1){
	    list.addToTail(1);
	}
	return list;
}
var listyList = new linkedList(2);
listyList.addToTail(4);
listyList.addToTail(6);

var list3 = new linkedList(7);
list3.addToTail(4);
list3.addToTail(1);

var list4 = addTwoNumbers(listyList, list3);
console.log(list4);

list4.addToTail(3);
console.log("list4 again", list4);





