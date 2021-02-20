
function longest(s1, s2){
 let arrS1 = s1.split('');
 let arrS2 = s2.split('');
 let sortedArray = arrS1.concat(arrS2).sort();
 //console.log(JSON.stringify(sortedArray));
 let uniqueCharsArray = sortedArray.reduce(function (accumulator, currentValue){
  if(accumulator.indexOf(currentValue)===-1){
   accumulator.push(currentValue);
  }
  return accumulator;
 },[])
 return uniqueCharsArray.join('');
}

let a = "xyaabbbccccdefww";
let b = "xxxxyyyyabklmopq"
console.log('test1: ',longest(a, b));// "abcdefklmopqwxy"

let a2 = "abcdefghijklmnopqrstuvwxyz"
console.log('test2: ',longest(a2, a2));// "abcdefghijklmnopqrstuvwxyz"


//cd bootcamp\weekendsAssignments\JS_weekend
//node Ex6_3.js

//console.log(JSON.stringify());