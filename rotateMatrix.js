function rotateMatrix (matrix, direction = 1) {
  newMatrix = []
  if(direction === 1){
  for(var j = 0; j < matrix[0].length; j++){
    var temp = []
  for (var i = matrix.length -1; i >= 0; i--){
    temp.push(matrix[i][j])
  }
  newMatrix.push(temp);
  }
  } else {
  for (var i = matrix[0].length -1; i >= 0; i--){
    var temp = []

      for(var j = 0; j < matrix.length; j++){
    temp.push(matrix[j][i])
  }
  newMatrix.push(temp);
  }
  }
  return newMatrix;
}
