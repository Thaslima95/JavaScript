//Arrow function with no argument

// let arrowfunc = () => console.log('I am arrow function with no arguments');
// arrowfunc(); //calling arrow function


//Arrow function with one argument

// const getVal=x=>console.log(x)
// getVal(10)



//arrow function as an expression

// const age = 10;
// //arrow function with ternary operator
// const welcome = (age < 4) ?
//   () => console.log('I am Baby') :
//   () => console.log('I am Toddler');

// welcome(); 

//Multiline arrow functions
// const product = (a, b) => {
//     let result = a * b;
//     return result;
// }

// let result1 = product(5,7);
// console.log(result1); 

//this keyword in normal function
// function Person() {
//     this.name = 'Janiel',
//     this.age = 25,
//     this.sayName = function () {

//         // this is accessible
//         console.log(this.age);//25

//         function innerFunc() {

//             // this refers to the global object
//             console.log(this.age);//undefined
//             console.log(this);//refers window in browser
            
//         }
//         innerFunc();
//     }
// }
// let x = new Person();
// x.sayName();



//this keyword in arrow function
// function Person() {
//     this.name = 'Janiel',
//     this.age = 25,
//     this.sayName = function () {

//         console.log(this.age);//25
//         const innerFunc = () => {
//             console.log(this.age);//25//refers the parent scope
//         }

//         innerFunc();
//     }
// }

// const x = new Person();
// x.sayName();

//argument binding in normal function
// let x = function () {
//     console.log(arguments);
// }
// x(10,16,18); // Arguments [10, 16, 18]

//arrow function doesn't support argument binding
// let x = () => {
//     console.log(arguments);
// }

// x(4,6,7); 
// ReferenceError: Can't find variable: arguments

//spread operator
// let x = (...n) => {
//     console.log(n);
// }

// x(10,16,18);


// let person = {
//     name: 'Janiel',
//     age: 25,
//     sayName: () => {

//         // this refers to the global .....
//         console.log(this.age);
//     }
// }

// person.sayName(); // undefined


let Bar = () => {};
let bar = new Bar(); // TypeError: Bar is not a constructor