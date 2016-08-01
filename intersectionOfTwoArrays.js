function intersection(ray1, ray2){
	var storage = {};
	var resultsStorage = {};
	var results = [];
	for(var i = 0; i < ray1.length; i++){
		storage[ray1[i]] = true;
	}
	for (var j = 0; j < ray2.length; j++){
		if(ray2[j] in storage){
			if(!resultsStorage[ray2[j]]){
			resultsStorage[ray2[j]] = true;
			results.push(ray2[j]);
			}
		}
	}
	return results;
}

console.log(intersection([1,2,4,5,3,3,3], [3,3,3,3,4,5]));