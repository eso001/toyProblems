var combinationSum = function(candidates, target){
	results = [];

	//combo is array of numbers, total is total i'm working with
	//subset is a part of the candidates array that problem is allowed to work with
	comboCheck([], 0, candidates);
	function comboCheck(combo, total, subset){
		if(total > target){
			return;
		} else if(total === target){
			results.push(combo);
		} else {
			for(var i = 0; i < subset.length; i++){
				var subCombo = combo.slice();
				var subTotal = total + subset[i];
				subCombo.push(subset[i]);
				var subSubset = subset.slice(i);
				comboCheck(subCombo, subTotal, subSubset);
			}
		}
	}

	return results;
}

console.log(combinationSum([1,2,3,6,7], 7));