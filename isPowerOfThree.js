
//easy for loop solution
function isPowerOfThree(n){
    if(n === 0 ){
        return false;
    }
    for(var i = 1; i <= n; i*=3){
        if(n === i){
            return true;
        }
    }
    return false;
}console.log(isPowerOfThree(9));