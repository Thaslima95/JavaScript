/* 1. Write a program to give the following output for the given input

Eg 1: Input: a1b10
       Output: abbbbbbbbbb
Eg: 2: Input: b3c6d15
          Output: bbbccccccddddddddddddddd
The number varies from 1 to 99.*/

function printVal(ins)
{
    let letters=[];
    let nums=[]
let arr=ins.split('')
for(let i=0;i<arr.length;i++)
{
    let numcat='';
    if(isNaN(arr[i]))
    {
        letters.push(arr[i])
    }
    else{
        if(!isNaN(arr[i+1])) 
        {
            numcat+=arr[i]+arr[i+1];
            i++;
        }
        else{
            numcat+=arr[i]
        }
        nums.push(numcat)
        
    }
}
let obj={}
letters.map((e,idx,letters)=>{
    obj[letters[idx]]=Number(nums[idx])
})
let str=''
for([key,value] in obj)
{
    i=0;
    while(i<obj[key])
    {
        console.log(value)
        str+=key;
        i++;
    }
}
console.log(str)
}
printVal("b3c6d15")