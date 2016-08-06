// If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string.
//  For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
// All airports are represented by three capital letters (IATA code).
// You may assume all tickets form at least one valid itinerary.

//Input: [["MUC", "LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]];

//OUTPUT: ["JFK", "MUC", "LHR", "SFO", "SJC"];

function reconstructItinerary(itinerary){
	var results = [];
	var startPoints = {};
	var jfkPoints = [];
	itinerary.forEach(function(item, i){
		if(item[0] === "JFK"){
			jfkPoints.push(i);
		}
		startPoints[item[0]] = i;
		
	})
	console.log(startPoints);
	jfkPoints.forEach(function(index){
		var path = ["JFK"];

		var begin = itinerary[index];
		path.push(begin[1]);

		console.log("begin", startPoints[begin[1]]);
		if(begin[1] in startPoints){
			var nextPoint = startPoints[begin[1]];

		}
		console.log(nextPoint);
		while(nextPoint || nextPoint === 0){
			var nextPlace = itinerary[nextPoint][1];
			path.push(nextPlace);
			if(startPoints[nextPlace]){
				nextPoint = startPoints[nextPlace]
			} else {
				nextPoint = false;
			}
		}
		results.push(path);
	})

	var finalPath = results[0];
	for(var i = 0; i < results.length; i++){
		if(results[i] < finalPath){
			finalPath = results[i];
		}
	}
	return finalPath;
}

console.log(reconstructItinerary([["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]));




