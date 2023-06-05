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


// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };

// //e[0]=>contains key=>banana,orange,meat
// //e[1]=>values=>1,2,4
// let double=Object.fromEntries(Object.entries(prices).map((e)=>[e[0],e[1]*2]))

// console.log(double)
// console.log(double.orange)

// //object references and copying
// let user = { name: "Thaslima" };

// let admin = user; // copy the reference


// //if we try to change the value of name property of admin
// //it will reflected in user object also
// //because the reference is pointing to same address of the memory
// // admin.name="Aafiya";

// // console.log(user)//aafiya
// // console.log(admin)//aafiya

// //comparison of object

// // let a={}
// // let b=a;


// // console.log(a===b)//true
// // //bcx it points to same address


// let a={}
// let b={}

// console.log(a===b)//false

// //because these two objects pointing to different address



//Cloning objects

// let user = {
//   name: "Aafiya",
//   age: 1
// };

// let cloneUser = {}; // the new empty object

// // let's copy all user properties into it
// for (let key in user) {
//   cloneUser[key] = user[key];
// }

// // now clone is a fully independent object with the same content
// cloneUser.name = "Aafiya Thasnim"; // changed the data in it


// console.log(cloneUser)
// console.log( user.name ); // still Aafiya in the original object

// console.log(user===cloneUser)//false


//syntax
//Object.assign(dest, ...sources)

//The first argument dest is a target object.
//Further arguments is a list of source objects.

//It copies the properties of all source objects into the target dest, and then returns it as the result.



// let user={name:"Aafiya"}

// let activity1={walk:true}
// let activity2={sleep:false}

// //copying properties from activity1 and activity2 to user object
// Object.assign(user,activity1,activity2)


// // console.log(user)


// //If the copied property  already exists, it gets overwritten:

// // Object.assign(user,{sleep:true})

// // console.log(user)


// //object cloning using Object.assign

// let user2=Object.assign({},user)

// console.log(user2)//{ name: 'Aafiya', walk: true, sleep: false }



//nested cloning

// let user = {
//   name: "Thaslima",
//   address: {
//    state:"Tamilnadu",
//    city:"Mannargudi",
//    pincode:{
//     zipcode:614001
//    }
//   }
// };

// // let user5= Object.assign({},user)

// let user5=structuredClone(user)

// user5.address.pincode.zipcode=614103

// console.log(user)

// console.log(user5)

// console.log(user.address.city)

// let user2Clone=Object.assign({},user)

// console.log(user2Clone)

// user2Clone.address.city="Podakkudi";

// console.log(user)

// console.log(user2Clone)
//see the difference user object city also changed because due to shallow copy of nested objects.

//To fix that and make user and clone truly separate objects, we should use a cloning loop that examines each value of user[key] and, 
//if it’s an object, then replicate its structure as well. That is called a “deep cloning” or “structured cloning”. 

//strcutured clone

// let user3Clone=structuredClone(user)

// user3Clone.address.state="TN";

// console.log(user)

// console.log(user3Clone)

// console.log(user)//changes not reflected in user object




//object destructuring

// const employee = {    // Object we want to destructure
//   firstname: 'Thaslima',
//   lastname: 'Banu',
//   dateofbirth: '1995'
// };

// Destructuring the object into our variables!!
// const { firstname, lastname, dateofbirth } = employee;
// console.log( firstname, lastname, dateofbirth);

// console.log(`My name is ${firstname} ${lastname}`)

//Aliases!!!

// const { firstname: name, lastname: middlename, dateofbirth: dob } = employee;
// console.log( name, middlename, dob);


// const employee = {    // Object we want to destructure
//   firstname: 'Thaslima',
//   lastname: 'Banu',
//   dateofbirth: '1995'
// };


// Destructuring the object into variables without!!
// assigning default values
// var { firstname, lastname, country } = employee;
// console.log("Without setting default values")
// console.log( firstname, lastname, country);

// Destructuring the object into variables by
// assigning default values!!
// const {firstname,lastname,country = 'India' } = employee;
// console.log("\n After setting default values")
// console.log( firstname, lastname, country);


//Nested Object destructuring!!

// const user = {
//   id: 1,
//   name: "Leanne Graham",
//   username: "Bret",
//   email: "Sincere@april.biz",
//   address: {
//     street: "Kulas Light",
//     city: "Gwenborough",
//     zipcode: "92998-3874",
//     geo: {
//       lat: "-37.3159",
//       lng: "81.1496"
//     }
//   },
//   phone: "1-770-736-8031 x56442",
//   website: "hildegard.org",
//   company: {
//     name: "Romaguera-Crona"
//   }
// };
// const {address: {geo: { lng }}} = user;
// console.log(lng);

// const {address:{zipcode}}=user;
// console.log(zipcode)

// const {  address: { city } }  = user;
// console.log(`City:${city}`);



//Destructure to function parameter!!

// const user = {
//   'name': 'Thaslima',
//   'email': 'thaslibanujas17@gmail.com',
//   'age': 28
// }
// //here destructure the name and email properties of user object
// const getDetails=({name,email})=>{
//   console.log(`My name is ${name} and my email id is ${email}`)
// }
// getDetails(user);



//Destructure function return value!!

// const getUser=()=>{
//   return{
//     'name':"Thaslima",
//     'email':"thaslibanujas17@gmail.com",
//     'age':28
//   }
// }
// const {name,email}=getUser();

// console.log(name,email);


//Destructure in Loops!!

// const users = [
//   {
//     name: "Thaslima",
//     address: "15th Park Avenue",
//     age: 30
//   },
//   {
//     name: "Aafiya",
//     address: "Canada",
//     age: 1
//   },
//   {
//     name: "Nizam",
//     address: "Bangalore",
//     age: 28
//   }
// ];
// for (let { name, age } of users) {
//   console.log(`My name is ${name} and age is ${age}`);
// }

//destructure with rest(...)
let user={
  name:"Thaslima",
  age:28,
  place:"mannai"
}

const {name,...details}=user;

console.log(name);
console.log(details)

