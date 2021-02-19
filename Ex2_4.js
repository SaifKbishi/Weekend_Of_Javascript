let uni1 = [ 1, 1, 1, 2, 1, 1 ];
let uni2 = [0, 0, 0.55, 0, 0];

function findUniq(array){
 let sortedArray = array.sort(function(firstItem, secondItem){
  return firstItem - secondItem;
 });
 let lastNumber = sortedArray[sortedArray.length-1];
 let firstNumber = sortedArray[0];
 let secondNumber = sortedArray[1];

 if(firstNumber != secondNumber &&  firstNumber!= lastNumber){
   return firstNumber;
 }else if(lastNumber != firstNumber && lastNumber != secondNumber){
  return lastNumber;
}
}

console.log( findUniq(uni1));
console.log( findUniq(uni2));


//cd bootcamp\weekendsAssignments\JS_weekend
//node Ex2_4.js
