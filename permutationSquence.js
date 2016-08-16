//n is a number between 1 and 9
//you have to return the kth permutation
function getPermutation(n, k){
	var container = [];
	var permutations = [];
	for(var i = 1; i < n + 1; i++){
		container.push(i);
	}

	function createPermutation(leftovers, permutation){
		if(permutation.length === n){
			permutations.push(permutation);
			return;
		}
		for(var j = 0; j < leftovers.length; j++){
			var subContainer = leftovers.slice();
			var subPerm = permutation;
			subPerm += subContainer.splice(j, 1)[0];
			createPermutation(subContainer, subPerm);
		}
	}
	createPermutation(container, "");
	return permutations[k-1];
}

console.log(getPermutation(9, 24));