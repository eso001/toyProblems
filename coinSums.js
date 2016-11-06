//the coinSums function takes in a total and can output how many ways you can make the total using the coins given in the array.
var coins = [1,2,5,10,20,50,100,200];
function coinSums (total) {
  var comboCount = [[],[],[],[],[],[],[],[]];
    comboCount.forEach((comboRow, index) => {
      if(index === 0){
        for(var j = 0; j < total + 1; j++){
          comboRow.push(1);
        }
      } else {
        for(var i = 0; i < total + 1; i++){
          var comboAboveCurrent = comboCount[index-1][i];
          var indexToInput = i - coins[index];
          if(indexToInput < 0){
            comboRow.push(comboAboveCurrent);
          } else {
            comboRow.push(comboRow[indexToInput] + comboAboveCurrent)
          }
        }
      }
    })
  return comboCount[comboCount.length-1][total];
}