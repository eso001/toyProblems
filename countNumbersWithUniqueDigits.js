var countNumbersWithUniqueDigits = function(n) {
    if(n > 10){
    	n = 9;
    }
    var max = Math.pow(10, n);
    var total = 0;
    var truther;
    var stringNumber;

    for ( var i = 0; i < max; i++){
    	var storage = {};
    	truther = true;
    	stringNumber = i.toString();

    	for(var j = 0; j < stringNumber.length; j++){
    		if(stringNumber[j] in storage){
    			truther = false;
    			break;
    		}
    		storage[stringNumber[j]] = true;

    	}
    	if(truther){
    		total++;
    	}
    }
    return total;
};

console.log(countNumbersWithUniqueDigits(3));