
function countNumberOfDuplicates(aString){
 //debugger;
 let counter =0; 
 let countLetters= {};
 let arrString = aString.toLowerCase().split('');
 arrString = arrString.sort();
 for(let i=0; i< arrString.length; i++){
  count = countLetters[arrString[i]];
  countLetters[arrString[i]] = count ? count +1 :1;  
}
for(let i=0; i< Object.values(countLetters).length; i++){
 if(Object.values(countLetters)[i]>1){
  counter++;
 }
}
 return counter; 
}

console.log('abcde: ',JSON.stringify(countNumberOfDuplicates('abcde')));
console.log('aagGgbbcde ',JSON.stringify(countNumberOfDuplicates('aagGgbbcde')));
console.log('aabBcde: ',JSON.stringify(countNumberOfDuplicates('aabBcde')));
console.log('Indivisibilities: ',JSON.stringify(countNumberOfDuplicates('Indivisibilities')));


//cd bootcamp\weekendsAssignments\JS_weekend
//node Ex6_2.js

