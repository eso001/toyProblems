//Given an array, find the longest wiggle subsequence

//a wiggle subsequence is defined as:

//if the differences between successive numbers alternates between positive and negative

//so [1,7,4,9,2,5] will have a subsequence of 6, since the entire array is a wiggle subsequence

// [1,2,3,4,5,6] will have a subsequence of 2. Which is the minimum length.


function wiggleSubsequence(wiggleSet){
	var wiggleStatus;
	if(wiggleSet.length > 1){
		var longestSubsequence = currentWiggle = 2;
	var firstDifference = wiggleSet[0] - wiggleSet[1]
		if(firstDifference < 0) {
			wiggleStatus = "-";
		} else if(firstDifference === 0) {
			wiggleStatus = "0";
			var longestSubsequence = currentWiggle = 1;
		} else {
			wiggleStatus = "+";
		}

	} else {
		return wiggleSet.length;
	}
	for(var i = 1; i < wiggleSet.length - 1; i++){
		var currentDifference = wiggleSet[i] - wiggleSet[i+1];
		if(currentDifference > 0) {
			if(wiggleStatus === '-'){
				currentWiggle++
			} else {
				if(longestSubsequence < currentWiggle){
					longestSubsequence = currentWiggle;
				}
				currentWiggle = 2;
			}
			wiggleStatus = "+";
		} else if (currentDifference < 0){
			if(wiggleStatus === "+"){
				currentWiggle++
			} else {
				if(longestSubsequence < currentWiggle){
					longestSubsequence = currentWiggle;
				}
				currentWiggle = 2;
			}
			wiggleStatus = '-';
		} else {
			wiggleStatus = "0";
			currentWiggle = 1;
		}
	}
	if(longestSubsequence < currentWiggle){
		longestSubsequence = currentWiggle;
	}
	return longestSubsequence;
}
console.log(wiggleSubsequence([2,10,1,17,5,10,13,15,10,5,16,8,18]));





