

function century(aYear){
 //let cent = aYear % 100;
 if((aYear % 100)===0){
  return (aYear /100);
 }else{
  return Math.floor((aYear / 100)) +1;
 } 
}

console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(2000));

//cd bootcamp\weekendsAssignments\JS_weekend
//node Ex2_6.js

