//creation of objects
//non primitive data type
//key value pair

const obj1=new Object({name:"Thaslima",age:28});

const obj2={
    name:"Thaslima",
    age:28
};

// //accessing object using dot notation
// console.log(obj1.name)
// console.log(obj2.age)

// //add an property to object
// obj1.isadmin=true;

// console.log(obj1)

// //to remove a property
// delete obj1.age;


// console.log(obj1)

// //multiwound property
// const obj3={
//     name:"Nizamudeen",
//     age:28,
//     "Full Name":"Nizamudeen Thaslima"
// }

// //set
// obj3["Full Name"]="Nizamudeen ThaslimaAafiya"

// //get
// console.log(obj3["Full Name"])

// //another way

// let key="like birds"
// obj3.key=true;

// obj3[key]=true;
// console.log(obj3.key)

// console.log(obj3)

// console.log(obj3[key])


//Computed properties
//We can use square brackets in an object literal, when creating an object. That’s called computed properties.

// let fruit ="orange"

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// console.log( bag.orange);

// let fruit='water'
// const bag={
//     [fruit+"melon"]:5
// }

// console.log(bag)


//Property names limitations
//As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.

//But for an object property, there’s no such restriction:

// let obj4={
//     for:"Hello",
//     let:3,
//     return:['1',2,3]
// }

// console.log(`${obj4.for} , ${obj4.let} , ${obj4.return}`)

//In short, there are no limitations on property names. They can be any strings or symbols
// let obj5={
//     0:"true"
// }

// console.log(obj5[0])
// console.log(obj5["0"])//both are same


// let obj4={
//     for:"Hello",
//     let:3,
//     return:['1',2,3]
// }

// let obj5={
//     0:"true"
// }

// //checking propery exists or not

// if(obj5.name === undefined)
// {
//     console.log("property doesn't exists")
// }
// else{
//     console.log("property exists")
// }

// if(obj4.hasOwnProperty==="name")
// {
//     console.log('having name')
// }
// else{
//     console.log("no")
// }

//special syntax
// console.log("name" in obj1)//checking key is exists in object or not


// let obj = {
//   test: undefined
// };

// console.log( obj.test ); // it's undefined, so - no such property

// console.log( "test" in obj ); // true, the property does exist!

//The "for..in" loop
// for(let key in obj1)
// {
//     console.log(key)//keys
//     console.log(obj1[key])//values
// }

// let codes = {
//   "49": "Germany",
//   "41": "Switzerland",
//   "44": "Great Britain",
//   "1": "USA"
// };

// for (let code in codes) {
//   console.log(code); // 1, 41, 44, 49
// }

// // Number(...) explicitly converts to a number
// // Math.trunc is a built-in function that removes the decimal part
// // console.log( String(Math.trunc(Number("49"))) ); 
// // console.log( String(Math.trunc(Number("+49"))) ); 
// // console.log( String(Math.trunc(Number("1.2"))) ); 

//If we want to print in creation order
// So, to fix the issue with the phone codes, we can “cheat” by making the codes non-integer.
// Adding a plus "+" sign before each code is enough.


// let codes1 = {
//   "+49": "Germany",
//   "+41": "Switzerland",
//   "+44": "Great Britain",
//   "+1": "USA"
// };

// for (let code in codes1) {
//   console.log(+code ); // 49, 41, 44, 1
// }

// //Task 1
// const user={}
// user.name="John"
// user.surname="Smith"
// user.name="Pete"
// console.log(user)
// delete user.name
// console.log(user)

// //Task2
// let obj7={}

// function isEmpty(obj)
// {
//     // console.log(obj[key])
    
//     for( let key in obj)
//     {
//         //if the loop has started, there is a property
//         return false
//     }
    
//     return true;
// }

// console.log(isEmpty(obj7))
// let sum=0
// let salaries={
//     John:100,
//     Ann:160,
//     Pete:130
// }

// for(let key in salaries)
// {
//     sum+=salaries[key]
// }
// console.log(sum)

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// function multiplyNumeric(menu)
// {
//     for(let key in menu)
//     {
        
//         if(typeof(menu[key])==="number")
//         {
//             menu[key]=menu[key]*2
//         }
//     }
   
// }
// multiplyNumeric(menu)
// console.log(menu)


//object.entries,values,keys

// let user = {
//   name: "Thaslima",
//   age: 28
// };

// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))


let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

//e[0]=>contains key=>banana,orange,meat
//e[1]=>values=>1,2,4
let double=Object.fromEntries(Object.entries(prices).map((e)=>[e[0],e[1]*2]))

console.log(double)
console.log(double.orange)