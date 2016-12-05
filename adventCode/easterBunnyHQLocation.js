//These directions signify L for left R for right.

//see how far away the HQ is with these directions
var compass = ['N','E','S','W']
var directions = ['R2', 'L3', 'R2', 'R4', 'L2', 'L1', 'R2', 'R4', 'R1', 'L4', 'L5', 'R5', 'R5', 'R2', 'R2', 'R1', 'L2', 'L3', 'L2', 'L1', 'R3', 'L5', 'R187', 'R1', 'R4', 'L1', 'R5', 'L3', 'L4', 'R50', 'L4', 'R2', 'R70', 'L3', 'L2', 'R4', 'R3', 'R194', 'L3', 'L4', 'L4', 'L3', 'L4', 'R4', 'R5', 'L1', 'L5', 'L4', 'R1', 'L2', 'R4', 'L5', 'L3', 'R4', 'L5', 'L5', 'R5', 'R3', 'R5', 'L2', 'L4', 'R4', 'L1', 'R3', 'R1', 'L1', 'L2', 'R2', 'R2', 'L3', 'R3', 'R2', 'R5', 'R2', 'R5', 'L3', 'R2', 'L5', 'R1', 'R2', 'R2', 'L4', 'L5', 'L1', 'L4', 'R4', 'R3', 'R1', 'R2', 'L1', 'L2', 'R4', 'R5', 'L2', 'R3', 'L4', 'L5', 'L5', 'L4', 'R4', 'L2', 'R1', 'R1', 'L2', 'L3', 'L2', 'R2', 'L4', 'R3', 'R2', 'L1', 'L3', 'L2', 'L4', 'L4', 'R2', 'L3', 'L3', 'R2', 'L4', 'L3', 'R4', 'R3', 'L2', 'L1', 'L4', 'R4', 'R2', 'L4', 'L4', 'L5', 'L1', 'R2', 'L5', 'L2', 'L3', 'R2', 'L2']
var displacement = {
	N: {
		orientation: 1,
		add: true
	},
	E: {
		orientation: 0,
		add: true
	}, 
	S: {
		orientation: 1,
		add: false
	},
	W: {
		orientation: 0,
		add: false
	}
}
var locationsVisited = {};
function calculateDistance(){
var coordinates = [0,0];
var direction = 0
var visitedTwice = null;

directions.forEach(function(item){
	if (item[0] === 'R'){
		direction = turnRight(direction);
	} else {
		direction = turnLeft(direction);
	}
	var movementObj = displacement[compass[direction]];
	var numberOfSpaces = +item.slice(1, item.length);
	if(movementObj.add){
		coordinates[movementObj.orientation] += numberOfSpaces;
	} else {
		coordinates[movementObj.orientation] -= numberOfSpaces;
	}
	console.log("checking valid", locationsVisited[coordinates], coordinates);
	if(locationsVisited[coordinates] && !visitedTwice){
		console.log("setting visited twice", coordinates);
		visitedTwice = coordinates.slice();	
	}
	locationsVisited[coordinates.slice()] = true; 
	})
console.log("visited twice", visitedTwice);
}

function turnRight(direction){
	if(direction < 3) {
		return direction + 1;
	} else { 
	 return 0;
	}
}

function turnLeft(direction){
	if(direction === 0) {
		return 3;
	} else { 
	 return direction - 1;
	}
}
calculateDistance();
