function maskify(aString){
 
 let lastFour = aString.slice(aString.length-4);
 let prefix = aString.slice(0, aString.length-4);
 let arrString = prefix.split('');
 arrString.fill('#');
 let newString = arrString.join('').concat(lastFour);
 return newString;
}



console.log(maskify("Skippy"));
console.log(maskify("Nananananananananananananananana Batman!"));


//cd bootcamp\weekendsAssignments\JS_weekend
//node Ex5_6.js

