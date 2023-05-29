//Assigning a function to variable


// const welcome=()=>{
//     console.log("Welcome to First class function")
// }

// welcome()//Invoked using the function name


//Passing Function as an argument

// function sayName(){
// return "Thaslima";
// }

// function greet(name,message)
// {
//     console.log(message+ " "+ name())
// }

// // greet(sayName,"Hello my name is")


// //Returning function
// function example()//Higher order function
// {
//     return()=>{
        
//         console.log("First class function")
//     }
// }
// example()();//function call

//inner function

//  function fun1(a) {
//             function fun2(b) {
//                 return a + b;
//             }
//             return fun2;
//         }


// console.log(fun1("Combined")("Functions"))

//recursive functions
// program to count down numbers to 1
// function countDown(number) {

//     // display the number
//     console.log(number);

//     // decrease the number value
//     const newNumber = number - 1;

//     if (newNumber > 0) {
//         countDown(newNumber);//function calling countDown recursively based on condition
//     }
// }

// countDown(4);


//IIFE
// IIFE creation and execution.
    // (function() {
    //     console.log("Welcome to Immediately invoked function!");
    // })();

//Arrow function
// const value = (a, b) => a * b;
// console.log(value(3, 5));


//Arrow function with more lines of code
const values = (a, b) => {
    c = 5;
    return (a + b) * c;
};
console.log(values(2, 3));
