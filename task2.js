//1. Write a JavaScript function to print the “Hello World” message
//Function `displayMessage()` prints “Hello World” string using console.log() function

function displayMessage()
{
    console.log(`"Hello World"`)
}
displayMessage()

//output:"Hello World"

//2. Write a function that returns the square of a number
//Function `findSquare()` returns the square of the input number which is passed as an argument in the function call.

function findSquare(n)
{
 return n*n;
}

console.log(findSquare(2))

//output:4

//3. Write a function to convert Celsius to Fahrenheit
//Function `calFahrenheit()` returns the converted Celsius value to Fahrenheit value based on the formula `(Celsius × 9/5) + 32 = Fahrenheit`

function calFahrenheit(celval)
{
let far=(celval*(9/5))+32;
return far;
}
console.log(`Fahrenheit value equals to celcius is ${calFahrenheit(2)}`)

//output:Fahrenheit value equals to celcius is 35.6

//4. Write a function to find the area of a given Rectangle
//Function `rectangleArea()` returns the rectangle area provided the width and height as the argument.

let rectangleArea=(w,h)=>w*h;
console.log(rectangleArea(20,40))
//output:80

//5. Write a function to find the area and perimeter of a Circle
//Function `circleValues()` returns the perimeter and area of the circle provided the radius as an argument for the function call.


let circleValues=(r)=>{
    console.log(`Area and perimeter of circle is ${(Math.PI*r*r).toFixed(2)} and ${(2*Math.PI*r).toFixed(2)}`)
}
circleValues(20)

//output:Area and perimeter of circle is 1256.64 and 125.66

//6. Write a function to reverse a number
//Function `reverseNum()` returns the reversed number for the given argument number value.
let reverseNum=(num)=>{
let arr=String(num).split('');//convert the number into string then convert the string array using split
let x=arr.reverse().join('')//convert the array into string using join
console.log(Number(x))
}
reverseNum(23465326)

//output:62356432

//7. Count number of Vowels in String
//Function `countVowel()` returns the number of vowels in input string.


let countVowel=(str)=>{
    let vow=['a','e','i','o','u']
    let arr=str.split('')
    let count=0;
    let arr2=arr.filter((e)=>vow.includes(e))
    return arr2.length;
}
console.log(`vowel count is ${countVowel("hello this is vowel count string")}`)

//output:vowel count is 9

//8. Flatten array of arrays using JavaScript reduce
//Function `flattenArr()` flattens a 2D array by combining each sub array into 1D array by using JavaScript reduce.

function flattenArr(arr)
{
let arr1=arr.reduce((prev,curr)=>prev.concat(curr),[])
//[]is the initial value,accumulator


return arr1;
}
console.log(flattenArr([[2,3,4],[6,43],[6,9,10]]))
//output:[2, 3, 4,  6,43, 6, 9, 10]

//9. Write a function to calculate simple interest based on the principle amount
//Function `simpleInt()` returns a final amount based on the simple interest formula provided principal amount, rate of interest per year, and time on a yearly basis.

function simpleInt(p,r,t)
{
let simpleinterst=(p*r*t)/100;
return simpleinterst+p;
}

console.log(simpleInt(2000,0.5,3.5))
//output:35

//10. Write a function to generate a random number
//Function `genRandom()` return a generated random integer number between the provided start and end range.

let genRandom=(start,end)=>{
    let random=Math.floor((Math.random()*end)+start);
    return random;
}
console.log(genRandom(1,20))