function shortestWords(aString){
 let arrString = aString.split(' '); 
 let sortedArray = arrString.sort(function(firstItem, secondItem){
  return firstItem.length - secondItem.length;
 });
 
 console.log('Sorted string: ',JSON.stringify(sortedArray));
 let lenOfShotestWord = sortedArray[0].length;
 //const result = sortedArray.filter(word => word.length == lenOfShotestWord);
 return lenOfShotestWord;
}

console.log('length of shorest words are: ',shortestWords('Doouyu what is easy and your life will be hard.'));
//console.log('shorest word is: ',shortestWord('abcde ab abcd abc'));


//cd bootcamp\weekendsAssignments\JS_weekend
//node Ex5_7.js

