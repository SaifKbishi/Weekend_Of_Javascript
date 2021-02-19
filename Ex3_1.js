
function nb_year(p0, percet,imgrts, p){
 let years =0;
 debugger;
 let total = p0;
 let percetInc = percet /100;
 while(total < p){
  p0 = total;
  total = (p0 + p0*percetInc + imgrts);
  years++;
 }
 return years;
}

console.log(nb_year(1500, 5, 100, 5000));
console.log(nb_year(1500000, 2.5, 10000, 2000000));


//cd bootcamp\weekendsAssignments\JS_weekend
//node Ex3_1.js
