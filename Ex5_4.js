
function toWeirdCase(aString){
 let arrString = aString.split('');
 //console.log(arrString);
 for(let i=0; i< arrString.length; i++){ 
  if((i % 2)===0){
   arrString[i] = arrString[i].toUpperCase();
  }else{
   arrString[i] = arrString[i].toLowerCase();
 } 
}
let temp_arrString =  arrString.join('');
return temp_arrString;
}

console.log(toWeirdCase('String'));
console.log(toWeirdCase('Weird string case'));

//cd bootcamp\weekendsAssignments\JS_weekend
//node Ex5_4.js

