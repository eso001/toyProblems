var insert = function(intervals, newInterval) {
    var protocol = 0;
    var targetRay = [];
    var inserted = false;
    var indexesToSplice = [];
    var instructions = {};
    for(var i = 0; i < intervals.length; i++){
        targetRay = intervals[i]
        protocol = compare(targetRay, newInterval);
        if(protocol === 0){
            continue;
        } else if(protocol === 1){
            newInterval[0] = intervals[i][0];
            indexesToSplice.push(i);
        } else if(protocol === 2){
            newInterval[1] = intervals[i][1];
            indexesToSplice.push(i);
        } else if(protocol === 3){
            
            newInterval = intervals[i].slice();
            indexesToSplice.push(i);
            } else if(protocol === 4){
                indexesToSplice.push(i);
            } else if(protocol === 5){
            intervals.splice(i, 0, newInterval)
            inserted = true;
            break;
        }
    }
    if(inserted === false){
        intervals.push(newInterval);
    }
    if(indexesToSplice.length === 1){
        intervals.splice(indexesToSplice[0], 1);
    } else if(indexesToSplice.length > 1){
        intervals.splice(indexesToSplice[0], indexesToSplice.length);
    }
    return intervals;
};
function compare(targetRay, currentRay){
    if(currentRay[0] >= targetRay[0] ){
        if(currentRay[0] >= targetRay[1]){
            //0 means do not do anything
            return 0;
        } else {
            if(currentRay[1] < targetRay[1]){
                //replace currentArray with entire targetArray
                return 3;
            }
            //replace first element of currentArray with first element of target
            return 1;
        }
    } else {
        if(currentRay[1] < targetRay[0]){
            return 5;
        } else {
            if(currentRay[1] >= targetRay[1]){
                //remove the target Array from the intervals
                return 4;
            } else {
                //replace 2nd element of current Array with 2nd element of target Array
                return 2;
            }
        }
    }
}

console.log("FINAL ANSWER: ", insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,9]));