
//Write a JavaScript function that reverses a number.
function rev(num)
{
let arr=String(num).split('');//convert the number into string then convert the string array using split
let x=arr.reverse().join('')//convert the array into string using join
console.log(Number(x))
}
rev(322245)
rev(65237234)

//output:542223
//output:43273256

//rite a JavaScript function that checks whether a passed string is a palindrome or not?
function palindrome(str)
{
let arr1=str.split('').reverse();
let str1=arr1.join('');
(str==str1)? console.log(`${str} is palindrome`):console.log(`${str} is not palindrome`);
}
palindrome('radar')
palindrome('kinnikin')
//output:radar is palindrome
//output:kinnikin is not palindrome

//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
function firstLetter(str)
{
    let arr=str.split(' ')
    // arr.map((e)=>console.log( e[0].toUpperCase()+e.substr(1)))
    let arr2=arr.map((e)=>e[0].toUpperCase()+e.substr(1))
    return arr2.join(' ')
}
console.log(firstLetter("the words are so powerful"))
//output:The Words Are So Powerful

//Write a JavaScript function that accepts an argument and returns the type.
function findType(a)
{
    return typeof(a)
}
console.log(findType("hello"))
console.log(findType(123))
console.log(findType(true))
console.log(findType({a:20}))
console.log(findType(["1",2]))
console.log(findType(2.35))
console.log(findType())
console.log(findType(()=>console.log('hi')))
//string
// number
// boolean
// object
// object
// undefined
// function

//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
function countVowel(str)
{
    let vow=['a','e','i','o','u']
    let arr=str.split('')
    let count=0;
    arr.map((e)=>vow.includes(e.toLowerCase())?count++:'')
    return count;
    // let arr2=arr.filter((e)=>vow.includes(e))
    // return arr2.length;

}
console.log(countVowel("The quick brown fox"))
//output:5

//Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
function secondlowestlargest(arr)
{
let arr2=arr.sort((a,b)=>a-b)
return (`${arr2[1]},${arr2[arr2.length-2]}`)
}
console.log(secondlowestlargest([1,3,4,67,45,34,89]))

//output,67

//Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.
function isPrime(n)
{
    if(n<2)
    {
        return `${n} is not Prime Number`
    }
    for(let i=2;i<n;i++)
    {
        if(n%i==0)
        {
            return `${n} is not a Prime Number`
        }
    }
    return `${n} is a prime number`
}

console.log( isPrime(19));
console.log( isPrime(10));
console.log( isPrime(29));
console.log( isPrime(18));
//19 is a prime number
// 10 is not a Prime Number
// 29 is a prime number
// 18 is not a Prime Number

   //Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
   function longestWord(str)
   {
    let arr=str.split(' ')
    let arr2=arr.map((e)=>e.length)
    let index=arr2.indexOf(Math.max(...arr2))
    console.log(arr[index])
   }
   longestWord('Web Development Tutorial')

   //output:Development

   //Write a JavaScript function that returns a string that has letters in alphabetical order.
   function order(str)
   {
    let arr=str.split('').sort();
    console.log(arr.join(''))
   }
   order("webmaster hell_o")

   //output:abeemrstw

   //3. Write a JavaScript function that generates all combinations of a string.
//Example string : 'dog'

function combination(str)
{
    let arr=str.split('')
let res=[str]
arr.map((e)=>{
        res.push(e);
        let x=e;
        arr.map((e)=>{if(x!=e){res.push(x+e)}})
    })
    console.log(res)
}
combination("dog")
//output:['Dog', 'd', 'do', 'dg',  'o', 'od','og',  'g', 'gd','go']