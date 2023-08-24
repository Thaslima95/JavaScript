/* 2. Write a program to sort the elements in odd positions in descending order and elements in ascending order

Eg 1: Input : 13,2 4,15,12,10,5
      Output: 13,2,12,10,5,15,4
Eg 2: Input : 1,2,3,4,5,6,7,8,9
      Output: 9,2,7,4,5,6,3,8,1 
*/

function sortelements(arr)
{
    let temp;
    arr.map((e,idx,arr)=>{
        console.log(idx%2!=0);
        (idx%2!=0) && arr.map((e,idx)=>{
            console.log(idx+"odd");
           if (arr[idx-1]>arr[idx+1]) 
           {
            let temp=arr[idx];
            arr[idx]=arr[idx+2];
            arr[idx+2]=temp;
           }
        })
    })
console.log(arr)
}
sortelements([13,2,4,15,12,10,5])