
function yesNo(val){
 if(typeof(val) === 'boolean')
 {
  switch(val){
   case true:
    console.log('Yes');
    break;
   case false:
    console.log('No');
    break; 
  }
 }else{
  console.log('this is not valid input');
 }  
}

yesNo(true);
yesNo(false);
yesNo('what');


//cd bootcamp\weekendsAssignments\JS_weekend
//node Ex1_1.js

