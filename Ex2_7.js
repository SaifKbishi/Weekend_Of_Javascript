
function fourBasic(op, val1, val2){
 switch(op){
  case '+':
   return (val1 + val2);
   
  case '-':
   return (val1 - val2);
  case '*':
   return (val1 * val2);
  case '/':
   return (val1 / val2);
 }
}

console.log(fourBasic('+',4,7));
console.log(fourBasic('-',4,7));
console.log(fourBasic('*',4,7));
console.log(fourBasic('/',49,7));

//cd bootcamp\weekendsAssignments\JS_weekend
//node Ex2_7.js

