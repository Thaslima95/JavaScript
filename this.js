// const person = {
//   name: "Thaslima",
//   greet: function() {
//     console.log(`Hello, my name is ${this.name}!`);
//   }
// };

// person.greet(); 


// function Car(make, model) {
//   this.make = make;
//   this.model = model;
// }

// const myCar = new Car("Tesla", "Model S");//this refers to myCar instance
// console.log(myCar.make); 
// console.log(myCar.model);

// const myCar2=new Car("Rolex","Texas");//this refers to myCar2 instance
// console.log(myCar2.make);
// console.log(myCar2.model)



// function sayName() {
//   console.log(`Hello my name is  ${this.name}!`);
// }

// const person1 = { name: "Alice" };
// const person2 = { name: "Bob" };

// const sayNameOfPerson1 = sayName.bind(person1);
// sayNameOfPerson1();

// sayName.call(person2); 


//non-strict mode
// function show()
// {
//     console.log(this===window)
// }

// show()

//use strict mode
// "use strict";
// function show()
// {
//     console.log(this===undefined)
// }
// show()


//Methoda Invocation

// let car={
//     brand:"Honda",
//     getBrand:function()
//     {
//         return this.brand;
//     }
// }

// console.log(car.getBrand());
// let brand=car.getBrand;

// console.log(brand())

// let bike={
//     brand:'MotoX'
// }

// let brand=car.getBrand.bind(bike)
// console.log(brand())

// // let brandf=car.getBrand.bind(car)//passing objects

// // console.log(brandf())


// function getBrand(prefix){
//     console.log(prefix+this.brand)
// }

// let honda={
//     brand:'Honda'
// }

// let audi={
//     brand:'Audi'
// }

// getBrand.call(honda,"Its a ")//passing objects as well as parameters
// getBrand.call(audi,"Its's an ")


// let nameObj = {
//     name: "Johny"
// }
  
// let PrintName = {
//     name: "Bebefin",
//     sayHi: function (age) {
//         console.log(this.name + " age is " + age);
//     }
// }
  
// PrintName.sayHi.call(nameObj, 42);//this refers to namObj


// apply() similar to call() except arguments passed as an array
// let nameObj = {
//     name: "Tony"
// }
  
// let PrintName = {
//     name: "steve",
//     sayHi: function (age) {
//         console.log(this.name + " age is " + age);
//     }
// }
// PrintName.sayHi.apply(nameObj, 42);

//bind()
const person1={
    name:'Thaslima',
    year:1995,
    calAge(){
        console.log(`${name} age is ${new Date().getFullYear()-year}`)
    }
}

const person2={
    name:'Nizamudeen',
    year:1993,
}

const getAge=person1.calAge.bind(person2)
getAge();


//