function accum(aString){
 let arrString = aString.toLowerCase().split('');

 arrString.forEach((element, index, newArray)=> {
  newArray.splice(index, 1, element.charAt(0).toUpperCase().concat(element.repeat(index)));
  arrString= newArray.join('-');
 });

 return arrString;
}

console.log(JSON.stringify(accum('abcd')));
console.log(JSON.stringify(accum('RqaEzty')));
console.log(JSON.stringify(accum("cwAt")));

//cd bootcamp\weekendsAssignments\JS_weekend
//node Ex6_1.js