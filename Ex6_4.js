let str1 = 'Dermatoglyphics';
let str2 = 'aba';
let str3 = 'moOse';
let str4 = 'Saif'

function isogram(aString){
 let arrString = aString.toLowerCase();
 //debugger;
 arrString = arrString.split('');
 let uniqueCharsArray = arrString.reduce(function (accumulator, currentValue){
  if(accumulator.indexOf(currentValue)===-1 ){
   accumulator.push(currentValue);
  }
   return accumulator;  
 },[])
 if(uniqueCharsArray.length < arrString.length){
  return false; 
 } 
 else{
  return true;
 }
}

console.log(str1,': ',(isogram(str1))? 'is isogram' : 'is not isogram');
console.log(str2,': ',(isogram(str2))? 'is isogram' : 'is not isogram');
console.log(str3,': ',(isogram(str3))? 'is isogram' : 'is not isogram');
console.log(str4,': ',(isogram(str4))? 'is isogram' : 'is not isogram');


//cd bootcamp\weekendsAssignments\JS_weekend
//node Ex6_4.js

