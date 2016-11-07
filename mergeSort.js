function mergeSort(arr){
  //Your code here
  if(arr.length === 1){
    return arr;
  }
  var constructionArray = arr.slice();
  while(constructionArray.length > 1){
    var underConstruction = [];
    for(var i = 0; i < constructionArray.length -1; i+=2){
      underConstruction.push(sort(constructionArray[i], constructionArray[i+1]));
    }

    if(constructionArray.length > 1 && constructionArray.length%2 === 1){
        underConstruction.push(constructionArray[constructionArray.length - 1])    
    }
    constructionArray = underConstruction;
  }
  return constructionArray[0];
}

  function sort(arr1, arr2){
    var newRay = [];
    var i = 0;
    var j = 0;
    if( typeof arr1 === 'number'){
      arr1 = [arr1];
    }
    if(typeof arr2 === 'number'){
      arr2 = [arr2];
    }
    while(i < arr1.length || j < arr2.length) {
        if (arr1[i] < arr2[j] || !arr2[j] ){
          newRay.push(arr1[i]);
          i++;
        } else {
          newRay.push(arr2[j]);
          j++;
        }
    }
    return newRay;
  }