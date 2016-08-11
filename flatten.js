function flatten(list){
	var results = [];
	function listIterator(subList){
		for(var i = 0; i < subList.length; i++){
			var element = subList[i];
			if(Array.isArray(element)){
				listIterator(element);
			} else {
				results.push(element);
			}
		}
	}
	listIterator(list);
	return results;
}

console.log(flatten([1,2,[3,[4,5]],6,7,8]));