function Tribo(n){
 let a=1,b=1,c=1;
 let nN;
 debugger;  
 for(let i=1; i<=n; i++){  
  //if(i===n) return a;
  console.log(a);
  nN = a + b +c;
  a = b;
  b = c;
  c = nN;
 } 
}

Tribo(6);


//cd bootcamp\weekendsAssignments\JS_weekend
//node Ex4_2.js

