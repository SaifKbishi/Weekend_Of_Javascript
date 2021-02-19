function longestWords(aString){
 let arrString = aString.split(' '); 
 let sortedArray = arrString.sort(function(firstItem, secondItem){
  return secondItem.length - firstItem.length;
 });
 
 console.log('Sorted string: ',JSON.stringify(sortedArray));
 let lenOfShotestWord = sortedArray[0].length;
 const result = sortedArray.filter(word => word.length == lenOfShotestWord);
 return result;
}

console.log('shorest word are: ',longestWords('Doouyu what is easy and your life will be hard.'));
//console.log('shorest word is: ',shortestWord('abcde ab abcd abc'));


//cd bootcamp\weekendsAssignments\JS_weekend
//node Ex5_8.js

