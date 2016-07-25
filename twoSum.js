
//given an array of numbers and a target,
//return an tuple of indices whose values add 
//up to the target.

//each array has one answer


//time complexity: O(n^2)
function twoSum(nums, target){

	for(var i = 0; i < nums.length - 1; i++){
		for(var j = i + 1; j < nums.length; j++){
			var one = nums[i];
			var two = nums[j];
			if(one + two === target){
				return [i, j]
			}

		}
	}
	return [];
}

//Gonna redo problem with faster 
//time complexity: O(n)

function twoSum2(nums, target){
	var complements = {};

	for(var i = 0; i < nums.length; i++){
		if(nums[i] in complements){
			return [complements[nums[i]], i];
		}
		var complement = target - nums[i];
		complements[complement] = i;

	}
	return [];
}