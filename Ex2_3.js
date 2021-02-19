let flag= 0;

function findTheNextPerfectSquare(number){
 //debugger;
 number++;
 while(flag != 1){  
  if(isPerfectSquare(number)){
   flag =1;
   console.log(number);
  }else{
   number++;
  }
 }
}

function isPerfectSquare(square){ 
 if(Number.isInteger(Math.sqrt(square))){
  //console.log(Math.sqrt(square));
  return true;
 }else{
  return false;
 }  
}

findTheNextPerfectSquare(121);
findTheNextPerfectSquare(625);
findTheNextPerfectSquare(114);

//cd bootcamp\weekendsAssignments\JS_weekend
//node Ex2_3.js

