// function curry(fn) { // curry(fn) does transforms curry
//   return function (a) {
//     return function (b) {
//       return fn(a, b);
//     };
//   };
// } 
// function sum(a, b) {
//   return a + b;
// }
// let currySum = curry(sum);
// console.log(currySum(10)(20)); // 30


  function multiply(a) {  
      return function(b) {  
         return function(c) {  
            return a * b * c;  
         }  
      }  
   }  

   console.log(multiply(2)(5)(8))