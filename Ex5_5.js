function abbreviate(aString){
 let arrString = aString.split(' ');
 let first = arrString[0].slice(0,1).toUpperCase();
 let second = arrString[1].slice(0,1).toUpperCase();

 return `${first}.${second}` 
}

console.log(abbreviate('saif kbishi'));
console.log(abbreviate('hello world'));

//cd bootcamp\weekendsAssignments\JS_weekend
//node Ex5_5.js

