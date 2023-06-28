//Function Expression:
//Assigning a function to variable


// const welcome=()=>{
//     console.log("Welcome to First class function or Function Expression")
// }

// welcome()//Invoked 


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

    //Function with local variable
// function showMessage() {
//   let message = "Hello, I'm JavaScript!"; // local variable

//   console.log( message );
// }

// showMessage(); // Hello, I'm JavaScript!

// console.log( message ); // <-- Error! The variable is local to the function

//Arrow function
// const value = (a, b) => a * b;
// console.log(value(3, 5));


//Arrow function with more lines of code
// const values = (a, b) => {
//     c = 5;
//     return (a + b) * c;
// };
// console.log(values(2, 3));


// function showMessage(text1,text2)
// {
//     console.log(`${text1} ,${text2}`)
// }

// showMessage("Hello text1")


//Default values
// function showMessage(text1,text2="Hello I am text2")
// {
//     console.log(text1)
//     console.log(text2)
// }
// showMessage("hello I am text1")


// function showMessage(text1,text2="Hello I am text2")
// {
//     console.log(text1)
//     console.log(text2)
// }
// showMessage("hello I am text1","Text 2")

// function showMessage(text1) {
//  //if text1 is undefined or null show unknown
//   console.log(text1 ?? "unknown");
// }

// showMessage(null)
// showMessage();

//Return a value
// function add(a,b)
// {
//     return a+b;
// }


// function add(a,b)
// {
//     let c=a+b;
//     return c;
//     console.log("after return statement")
// }
// console.log(add(5,5))


// function sum(...args) {
//   let sum = 0;
//   for (let arg of args) sum += arg;
//   return sum;
// }

// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
// console.log(x)

// const boyfriendIsPaying = 10;
// const isSale = false;

// if ((boyfriendIsPaying==10) || isSale) {
//   console.log("Jesse will go shopping.");
// } else {
//   console.log("Jesse will not go shopping.");
// }

const boyfriendIsPaying = false;
const isSale = false;
if (!boyfriendIsPaying || isSale) {
  console.log("Jesse will go shopping.");
} else {
  console.log("Jesse will not go shopping.");
}