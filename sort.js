let arr=[1,10,40,20,100,80]



console.log(arr.sort((a,b)=> a-b))
//without using function

for(let i=0;i<arr.length;i++)
{
    for(let j=0;j<arr.length;j++)
    {
        if(arr[i]<arr[j])
        {
          let temp=arr[i];
          arr[i]=arr[j];
          arr[j]=temp;
        }
        
    }
}
console.log(arr)

function comparison(a,b)
{
    //1.if return < 0 ..a comes first
    //2.0 nothing will changed
    //3.> 0 ...b comes first
}
const products=[{name:"laptop",price:80000},
{
    name:"Phone",price:6000
},
{
    name:"Ipad",price:4000
}
]

console.log(products.sort())
console.log(products.sort((a,b)=>a.price-b.price))

