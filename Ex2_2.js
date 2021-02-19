let binArray1 = [0, 0, 0, 1];
let binArray2 = [0, 0, 1, 1];
let binArray3 = [0, 0, 1, 0];

function binToInt(array){
 let number = array.join('');
 let intNumber = parseInt(number,2);
 console.log(intNumber);
}


binToInt(binArray1);
binToInt(binArray2);
binToInt(binArray3);

//cd bootcamp\weekendsAssignments\JS_weekend
//node Ex2_2.js

