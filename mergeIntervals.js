function merge(intervals){

	var storage = [];
	storage.push(intervals.shift());
	for(var i = 0; i < intervals.length; i++){
		var counter = 0;
		for(var j = 0; j < storage.length; j++){
			if(intervals[i][0] <= storage[j][1] && intervals[i][0] >= storage[j][0]){
				storage[j][1] = intervals[i][1];
			} else if (intervals[i][1] >= storage[j][0] && intervals[i][1] <= storage[j][1]){
				storage[j][0] = intervals[i][0]
			} else {
				counter++;
			}
		}
		if(counter === storage.length){
			storage.push(intervals[i]);
		}
	}
	return storage;
}

console.log(merge([[1,4],[1,4]]));