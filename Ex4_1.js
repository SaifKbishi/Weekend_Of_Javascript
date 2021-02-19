function fibo(n){
 let a=0,b=1;
 let nN;
 //debugger;  
 for(let i=0; i<=n; i++){
  //console.log(a);
  if(i===n) return a;
  nN = a + b;
  a = b;
  b = nN;
 } 
}

console.log(fibo(10));
//8 -> 21
//10 -> 55

//cd bootcamp\weekendsAssignments\JS_weekend
//node Ex4_1.js


