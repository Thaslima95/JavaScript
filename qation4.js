// 4. Find if a String2 is substring of String1. If it is, return the index of the first occurrence. else return -1.

// Eg 1:Input:
//         String 1: test123string
//          String 2: 123
//         Output: 4
// Eg 2: Input:
//         String 1: testing12
//         String 2: 1234 
//         Output: -1
let str1="test123"
let str2="123"
str1.includes(str2) ? console.log(str1.indexOf(str2)) : console.log( -1)


// 6. Using Recursion reverse the string such as

// Eg 1: Input: one two three
//       Output: three two one
// Eg 2: Input: I love india
//       Output: india love I 


let string1="one two three"
let arr1=string1.split(' ')
console.log(arr1.reverse().join(" "))

//  Sort the array alternately i.e first element should be max value, 
// second min value, third second max, third second min.
//  Eg: arr[] = {1,2,3,4,5,6,7} O/P: {7,1,6,2,5,3,4}
//  Note: no extra space and time complexity should be less;

console.time()
let arr6=[]
function alter(arrays)
{
    
let [firstMax,...array]=arrays.reverse()
firstMax && arr6.push(firstMax)

let [firstmin,...array2]=array.reverse()
 firstmin && arr6.push(firstmin)
if(array2.length>0)
alter(array2)

}
alter([1,2,3,4,5,6,7])
console.log(arr6)
console.timeEnd()

