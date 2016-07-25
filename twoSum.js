
//given an array of numbers and a target,
//return an tuple of indices whose values add 
//up to the target.

//each array has one answer


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