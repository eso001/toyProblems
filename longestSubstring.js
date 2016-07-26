//return the longest substring of unique characters

//this implementation does not give the right answer
function longestUniqueSubstring(string){
	var longestString = "";
	var ephemeralStorage = {};
	var currentString = "";
	for(var i = 0; i < string.length; i++){
		if(ephemeralStorage[string[i]]){
			if(currentString.length > longestString.length){
				longestString = currentString;
			}
			currentString = string[i];
			ephemeralStorage = {};
			ephemeralStorage[string[i]] = true;
		} else {
		currentString = currentString + string[i];
		ephemeralStorage[string[i]] = true;
		}
	}
	if(currentString.length > longestString.length){
		longestString = currentString;
	}
	return longestString;
}

//this also doesn't give the right answer
// function lengthOfLongestSubstring(string){
// 	var longestString = "";
// 	var ephemeralStorage = {};
// 	var currentString = "";
// 	for(var i = 0; i < string.length; i++){
// 		console.log("ephemeral", ephemeralStorage);
// 		if(string[i] in ephemeralStorage){
// 			if(currentString.length > longestString.length){
// 				longestString = currentString;
// 			}
// 			console.log("inside string[i] in ephemeralStorage");
// 			for(var k = 0; k < i; k++){
// 				if(string[i] === currentString[k]){
// 					console.log("cutting at k", k);
// 					currentString = currentString.slice(k);
// 					break;
// 				}
// 			}
// 			for(var j = 0; j < ephemeralStorage[string[i]]; j++){
// 				if(string[j] in ephemeralStorage){
// 					console.log("deleting", ephemeralStorage[string[j]]);
// 					delete ephemeralStorage[string[j]];
// 				}
// 			}
// 			currentString = currentString.slice(ephemeralStorage[string[i]] + 1);
// 			ephemeralStorage[string[i]] = i;
// 			currentString = currentString + string[i];
// 		} else {
// 			currentString = currentString + string[i];
// 			ephemeralStorage[string[i]] = i;
// 		}
// 	}
// 	console.log('longest string', longestString, currentString)
// 	if(currentString.length > longestString.length){
// 		longestString = currentString;
// 	}

// 	return longestString.length;


// };

console.log(lengthOfLongestSubstring("dvdf"));


function lengthOfLongestSubstring(string){
    if(string.length <= 1){
        return string.length;
    }
	var longestString = '';
	for(var i = 0; i < string.length-1; i++){
		for(var j = i+1; j < string.length; j++){
			var tempString = string.slice(i,j+1);
			var temp = {};
		
			var truther = true;
			for(var k = 0; k < tempString.length; k++){
				if(tempString[k] in temp){
					truther = false;
					break;
				}
				temp[tempString[k]] = true;
			}
			if(truther){
				if(tempString.length > longestString.length){
					longestString = tempString;
				}
			} else {
			    if(1 > longestString.length){
			        longestString = tempString[i];
			    }
			}

		}
	}
	return longestString.length;
}















































