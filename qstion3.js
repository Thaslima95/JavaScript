/*Given two sorted arrays, merge them such that the elements are not repeated

Eg 1: Input:
        Array 1: 2,4,5,6,7,9,10,13
        Array 2: 2,3,4,5,6,7,8,9,11,15
       Output:
       Merged array: 2,3,4,5,6,7,8,9,10,11,13,15 */

       let arr1=[2,4,5,6,7,9,10,13];
       let arr2=[2,3,4,5,6,7,8,9,11,15]
       arr2.forEach((e)=>{
        if(!arr1.includes(e)) arr1.push(e)
       })
    console.log(arr1.sort((a,b)=>a-b))
