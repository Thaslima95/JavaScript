//foreach:
// const transaction = ["+100", "-20", "-30", "+100", "+400"];
// let sum=0;
// transaction.forEach((trans)=>{
//     const symbol=trans[0];
//     trans=(+trans.slice(1));
//     if(symbol === '+')
//     {
//         sum+=trans;
//     }
//     else{
//         sum-=trans;
//     }
//     return sum;
// })

// console.log(sum)


// const transaction1=[100,20,340,500,300]
// transaction1.forEach((e,idx,arry)=>arry[idx]=e+50)

// console.log(transaction1)

//forEach in Map
//Employee Map
// let employee=new Map([
//     ['empId',101],
//     ['Name','Chiya'],
//     ['Gender','Male'],
//     ["Salary",'20000']
// ])

// console.log(employee)

// //Looping over a Map
// employee.forEach(function(value,key,map)
// {
//     console.log(`value of ${key} id ${value}`)
// })



//forEach in SET
//Names Set
// let names=new Set(['bebefin','chiku','chiya','johny','merry'])
// //Looping over a set
// names.forEach(function(entry,key,set)
// {
//     console.log(`${entry} : ${key}`)
// })

//forEach in array of objects
// const person=[{name:"Johny",age:20},{name:"Chiya",age:27}]

// const arr=person.forEach((person)=>person.age+=10)
// console.log(person)

// //foreach doesn't return anything instead it modifies the original array

// console.log(`value of arr ${arr}`)


//forEach doesn't wait for promises
async function main()
{
    const letters=['i','c','e','b','a','l','l'];
    let word=' ';

    letters.forEach(async letter=>{
        word=await join(word,letter);
    })
    console.log(word)
}

async function join(word,letter)
{
    return word+letter;
}

main();

//for loop with async await 

// async function main()
// {
//     const letters=['i','c','e','b','a','l','l'];
//     let word=' ';
//     for(let i=0;i<letters.length;i++)
//     {
//         const letter=letters[i];
//         word=await join(word,letter)
//     }
//   console.log(word)
// }

// async function join(word,letter)
// {
//     return word+letter;
// }

// main();

//map method
// var arr = [2, 5, 6, 3, 8, 9];

// const arrPlus10 = arr.map((val, index) => val + 10);//arrow function
// //map returns new array

// console.log(arrPlus10);//it doesn't modify original array

// console.log(`original array ${arr}`)



// //filter method
// const transaction = ["+100", "-20", "-30", "+100", "+400"];

// const updateTransanction = transaction.filter((ele) => {
//   if (ele[0] === "+") return true;
//   else return false;
// });
// console.log(updateTransanction);//filtered only credit transaction


//Greater than 7
// var numbers = [1, 3, 6, 8, 11];

// var greaterThanSeven = numbers.filter(function (number) {
//   return number > 7;
// });

// console.log(greaterThanSeven)

//based on search
//  const names = ["Johny", "Daniel", "Mike", "Sam", "Carol", "Bebeffin"];
// console.log("The names are=");
// console.log(names);
// var nameObject = names.filter(
//   (allNameObject) => !["Daniel", "Mike", "Sam", "Carol"].includes(allNameObject)
// );
// console.log("After filter=");
// console.log(nameObject);


//find Method

var array = [10, 20, 30, 40, 50];

// var found = array.find(function (element) {
//   return element > 20; //return first value that satisfies the condition
// });

// console.log(found)

//if element not found in array it rerurns false.

// var found=array.find((e=>e>80))

// console.log(found)


//find method to get first even number

// let numbers = [1, 3, 4, 2, 9, 8];

// // // function to check even number
// function isEven(element) {
//   return element % 2 === 0;
// }

// // // get the first even number
// let evenNumber = numbers.find(isEven);
// console.log(evenNumber);


//reduce= sum of total numbers ,product of numbers

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let sum = arr.reduce((prev, curr) => prev + curr, 1); //initial value 1

// let product = arr.reduce((prev, curr) => prev * curr);
// //not provided initial value first element of an array taken as initial value

// console.log(`sum of numbers ${sum}`); //sum of numbers

// console.log(`product of numbers ${product}`); //product of numbers

//Array method chaining
//Sum of square of odd numbers

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let oddsqauretotal=arr.filter((e)=>e%2!==0).map((e)=>e*e).reduce((prev,curr)=>prev+curr);
// //first filter the odd numbers 
// //then squared using map 
// //then find the sum of squares using reduce

// console.log(`Sum of sqaures of odd numbers ${oddsqauretotal}`);


//spread operator

// const arrValue = ['My', 'name', 'is', 'Thaslima'];

// console.log(arrValue);   // ["My", "name", "is", "Thaslima"]
// console.log(...arrValue); // My name is Thaslima



//copying array normally

// const arrayOne=[1,2,3,4]
// const arrayTwo=[5,6,7,8]
// const arrayThree=[arrayOne,arrayTwo];

// console.log(arrayThree)

//copy array using spread operator
// const arrayOne=[1,2,3,4]
// const arrayTwo=[5,6,7,8]
// const arrayThree=[...arrayOne,...arrayTwo]

// console.log(arrayThree)

//clone array

// let arr1=[1,2,3];
// let arr2=arr1;

// console.log(arr1);
// console.log(arr2);

//append an element to the array
// arr1.push(4);

// console.log(arr1);//[1,2,3,4]
// console.log(arr2);//[1,2,3,4]

//we have pushed 4 to arr1 but it was reflected in arr2 as well bcase reference to both array is same.

//clone array using spread operator
// let arr1=[1,2,3];

// let arr3=[...arr1]
// arr3.push(5)

// console.log("Using Spread Operator")

// console.log(arr1);
// console.log(arr3)


//Math with spread operator

//using math in list
// console.log(Math.min(1,2,3,-1))//prints -1

// let arrnum=[1,2,3,-1];

// console.log(Math.min(arrnum))//getting output as NaN


// //using spread operator

// console.log(Math.min(...arrnum))//-1 as expected


//concat two arrays
// const a=[1,2];
// const b=[1,2,3,4]
// console.log(a.concat(b))

// //using spread operator
// console.log([...a,...b])

//string to array
// var x="hello"
// var a=x.split('')

// console.log(a)

// var b=[...x]

// console.log(b)

//Copying nested array

// let array1 = ['h', ['e', [1, true, 9], "hello"], ['y']];

// // Copying array1 to array2 using spread operator
// let array2 = [...array1];

// // Printing array2 after copying
// console.log("Array 2 after nested copying:\n", array2);

// // Updating array1[0] from 'h' to 'a'
// array1[0] = 'a'

// // Printing array2 after updating array1[0]
// console.log("Array 2 after updating array1[0] to 'a':\n", array2);

// // Updating array1[1][0] from 'e' to 'b'
// array1[1][0] = 'b'

// // Printing array1 after updating array1[1][0]
// console.log("Array 1 after updating array1[1][0] to 'b':\n", array1);

// // Printing array2 after updating array1[1][0]
// console.log("Array 2 after updating array1[1][0] to 'b':\n", array2);//changes reflected in array2 also


//coupying array index wise
// let array1 = ['h', ['e', [1, true, 9], "hello"], ['y']];

// // Copying array1 to array2 using spread operator
// let array2 = [...array1];

// // Copying array1[1] nested array to array2[1] using spread operator
// array2[1] = [...array1[1]]

// // Copying array1[2] nested array to array2[2] using spread operator
// array2[2] = [...array1[2]]

// // Printing array2 after copying the data index wise
// console.log("Array 2 after nested copying:\n", array2);

// // Updating array1[0] from 'h' to 'a'
// array1[0] = 'a'

// // Printing array2 after updating array1[0]
// console.log("Array 2 after updating array1[0] to 'a':\n", array2);

// // Updating array1[1][0] from 'e' to 'b'
// array1[1][0] = 'b'

// // Printing array1 after updating array1[1][0]
// console.log("Array 1 after updating array1[1][0] to 'b':\n", array1);

// // Printing array2 after updating array1[1][0]
// console.log("Array 2 after updating array1[1][0] to 'b':\n", array2);
// //change is not reflected in array2



//spread operator with objects
// const obj1 = { x : 1, y : 2 };
// const obj2 = { z : "hai" };

// // add members obj1 and obj2  to obj3
// const obj3 = {...obj1, ...obj2};

// console.log(obj3); // {x: 1, y: 2, z: hai}


//update nested Objects
// const user = {
//   name: "Alex",
//   address: "15th Park Avenue",
//   age: 43,
//   department: {
//     name: "Sales",
//     Shift: "Morning",
//     address: {
//       city: "Bangalore",
//       street: "7th Residency Rd",
//       zip: 560001
//     }
//   }
// };
// const updated = {
//   ...user,
//   department: {
//     ...user.department,
//     address: {
//       ...user.department.address,
//       city: "Chennai"
//     }
//   }
// };
// console.log(updated);


//merge two objects
// const obj1={name:"Thaslima",Dept:"Frontend"};

// const obj2={empId:"PS073"}

// //merge two object into one object
// const obj3={...obj1,...obj2};

// console.log(obj3)


// const empdetails1={name:"Thaslima",Dept:"Frontend"};

// const empdetails2={name:"Banu",empId:"PS073"}

// const employee={...empdetails1,...empdetails2}

// console.log(employee)//result is {name:Banu,Dept:Frontend,empId:PS073}



//Rest Parameter

// const user={
//     'name':"Thaslima",
//     'email':"thaslibanuja058@gmail.com",
//     'age':28
// }

// const {age,...rest}=user;//separating age and remaining values stored in rest
// console.log(age,rest)

//rest parameter in functions

// function func(...args)//accepts any number of parameters passed
// {
//     let sum=0;
//     for(let i of args)
//     {
//         sum+=i;
//     }
//     return sum;
// }

// console.log(func(3,4,5))
// console.log(func(1,83,54))
// console.log(func(3,47,27,74,82,56))

//agruments mapping

// function func(a,b,...args)
// {
//     console.log(a)
//     console.log(b)
//     console.log(args)
// }

// func(1,"two",2,"Four",5,6,"Seven")
//1 will be mapped to a
//"two" will be mapped to b
//remaining parameters will be added to args array


// function func(a,b,...args)
// {
//     console.log(a)
//     console.log(b)
//     console.log(args)//stored as an array
// }

// func("one",2,"Three")


// function func(a,b,...args)
// {
//     console.log(a)
//     console.log(b)
//     console.log(args)//empty array []
// }

// func(1,"two")


// function func(a,b,...args)
// {
//     console.log(a)
//     console.log(b)//undefined
//     console.log(args)//empty array []
// }

// func("one value")


function func(a,...args)
{
    return args.map((e)=>a*e)
}


const result=func(2,5,6,7)

console.log(result)
// let x = 0xFF;
// console.log(x)


// var intNumber = 255;
// var hexNumber = intNumber.toString(16);  // hex number as string

// console.log(hexNumber);
