function display(n)
{
    let result=1
    for(let i=1;i<=10;i++)
    {
result=n*i;
console.log(`${n}*${i}=${result}`)
    }
}

display(9)

//negative  numbers
let arr=[2,-3,4,-7,-18,20]

let arr2=arr.filter((e)=>e>0)

console.log(arr2)

//sum of numbers
let arr1=[1,2,3,4,5,6,7,8,9,10]
let arr3=arr1.reduce((prev,curr)=>prev+curr)
console.log(arr3)

//reverse array
let narr=[1,2,3,4,5,6,7,8,9,10]
// console.log(narr.reverse())

//using function
function reverse(narr)
{
    let newarr=[];
    for(let i=narr.length-1;i>=0;i--)
    {
        newarr.push(narr[i])
    }
    return newarr;
}

console.log(reverse(narr))

//remove space in string
let str="I Love Chocolates"
let str2=str.split(" ").join("")
console.log(str2)