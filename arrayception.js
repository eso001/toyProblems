Array.max=function( array ){
    return Math.max.apply( Math, array );
};

function arrayception (array) {
  // Write your code here, and
  // return your final answer.
  var counter = [0];
  var depth = 1;
  function recursion(array, depth){
    
    var hasNumber = false;
    if(array.length > 0) {
      for (let i = 0; i < array.length; i++){
        if (Array.isArray(array[i])){
          
          recursion(array[i], depth +1)
        } else {
          hasNumber = true;
        }
       
      }
       if (hasNumber){
          counter.push(depth)
        }
    } else {
      return;
    }
    
  }
  recursion(array, depth);
  return Array.max(counter);
}
