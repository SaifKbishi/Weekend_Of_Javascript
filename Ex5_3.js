//const regex = /[A-Z]/g;
let flag =0;
function toCamelCase(aString){
 debugger;
 let strArray = aString.split('');

for(let i=0; i< strArray.length; i++){
 if( (strArray.indexOf(strArray[i]) === 0) && strArray[i] === strArray[i].toUpperCase()){
  strArray[i] = strArray[i].toUpperCase();
  //console.log(element);
 }else if(strArray[i] === '-' || strArray[i] === '_'){
  flag =1;
  strArray[i] = '';   
 }else if(flag ===1){
  flag=0;
  strArray[i] = strArray[i].toUpperCase();
 }
}
let new_strArray = strArray.join('');
console.log('result: ',new_strArray);
}

toCamelCase("the-stealth-warrior");
toCamelCase("The_Stealth_Warrior");


//cd bootcamp\weekendsAssignments\JS_weekend
//node Ex5_3.js












/**const regex = /[A-Z]/g;
const found = paragraph.match(regex); */
 //console.log(strArray);
/*
 strArray.forEach(function(element) {
  //console.log('element:', element,'iondex of element: ', strArray.indexOf(element));
  if( (strArray.indexOf(element) === 0) && element != element.toUpperCase()){
   element = element.toUpperCase();
   //console.log(element);
  }else if(element === '-' || element === '_'){
   flag =1;
   element = '';   
  }else if(flag ===1){
   flag=0;
   element = element.toUpperCase();
  }
 }, strArray);
 console.log('result: ',strArray);
}
*/