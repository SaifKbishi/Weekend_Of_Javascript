const array1 = ['a', 'b', 'c'];

function myForEach(array){
 for(let i=0; i< array.length; i++){
   doSomeThingFunction(array[i]);
 } 
}

function doSomeThingFunction(element){
 console.log('Hello, ', element);
}

//console.log('myForEach function: ',myForEach(array1));
/***************************************************************** */
const array2 = [1, 4, 9, 16];

function myMap(array){
 let newArray=[];
 for(let i=0; i< array.length; i++){
  newArray[i] = doSomeThingFunction2(array[i]);
 }
 return newArray;
}

function doSomeThingFunction2(element){
 return element * element;
}

//console.log('myMap function: ',myMap(array2));
/***************************************************************** */
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

function myFilter(array){
 let newArray=[];
 for(let i=0; i< array.length; i++){
  if(doSomeThingFunction3(array[i])){
   newArray.push(array[i]);
  }  
 }
 return newArray;
}

function doSomeThingFunction3(element){
 if(element.length > 6){
  return true;
 } 
}


console.log('myFilter function: ',myFilter(words));

//cd bootcamp\weekendsAssignments\JS_weekend
//node Ex7.js

