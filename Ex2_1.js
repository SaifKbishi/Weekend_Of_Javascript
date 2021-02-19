let ints1 = [19, 5, 42, 2, 77];
let ints2 = [10, 343445353, 3453445, 3453545353453];

function sumOfTwoLowestNumbers(array){
  let sortedArray = array.sort(function(firstItem, secondItem){
    return firstItem - secondItem;
   });
 
  console.log('sum of 2 mins: ',sortedArray[0] + sortedArray[1]);
}

sumOfTwoLowestNumbers(ints1);
sumOfTwoLowestNumbers(ints2);

//cd bootcamp\weekendsAssignments\JS_weekend
//node Ex2_1.js

