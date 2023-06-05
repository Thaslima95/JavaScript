//Describing var scope
// var x=10;


// function varScope()
// {
//  var x=2;

// if(true)
// {
//   x=5;
// console.log(x + " inside if block")//print 5
// }
// console.log(x +"  inside function ") //print 5
// }
//  console.log("x value outside function "+x)//print 10

// varScope()

// console.log("var(x value) after calling function "+x)  //print 10

// let x=20;


// function letScope()
// {
// let x=2;
// if(true)
// {
//  x=5;//re-assigmnet
// console.log(x + " inside if block ")//print 5
// }
// console.log(x+" inside function") //print 5 in the case of re-assigment
// }
// letScope()
// console.log("outside function "+ x)

// const x = 2;
// function constScope() {
//   // x = 3; // x is read only
//   // //it will throw error TypeError
//   if (true) {
//      const x = 4;
//     console.log(x + " inside if block ");
//   }
//   console.log(x + "outside if block");
// }
// console.log(x);
// constScope();


for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1);
// }