const on_offTheBus =[[5,0],[3,2],[4,4],[1,5]];

let countOnTheBus = 0;
function peopleOnTheBus(array){
 for(i=0; i< array.length; i++){
  countOnTheBus += array[i][0];
  countOnTheBus -= array[i][1];
  
 }
 return countOnTheBus;
}

console.log('people left on the bus are: ',peopleOnTheBus(on_offTheBus));

//cd bootcamp\weekendsAssignments\JS_weekend
//node Ex3_2.js

