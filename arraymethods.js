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

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let oddsqauretotal=arr.filter((e)=>e%2!==0).map((e)=>e*e).reduce((prev,curr)=>prev+curr);
//first filter the odd numbers 
//then squared using map 
//then find the sum of squares using reduce

console.log(`Sum of sqaures of odd numbers ${oddsqauretotal}`);
