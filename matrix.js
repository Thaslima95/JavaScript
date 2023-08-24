let diagonal=[[1,2,3],
[4,5,6],
[7,8,9]]
let sum=0;
for (let i=diagonal.length-1;i>=0;i--)
{
sum+=diagonal[i][i];
}
console.log(sum)