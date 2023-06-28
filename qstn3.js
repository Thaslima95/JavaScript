function sortText(M, A, texts) {
  const wordmap = new Map();
  // const pattern = /${A}/g;
  const pattern=new RegExp(A,'g')
console.time();
  // Count occurrences of A in each text
  for (let i = 0; i < M; i++) {
    const text = texts[i];
    const count = ((text.match(pattern)) || []).length;
    wordmap.set(count, text);
  }
 //another way using sort method
 //entries()=>Returns an iterator object with the [key, value] pairs in a Map
 //Array.from return a new array or create a new array from any iterable objects
const arr1=Array.from(wordmap.entries()).sort((a, b) => a[0] - b[0]);
//sort comparison
//1.if return < 0 ..a comes first
    //2.0 nothing will changed
    //3.> 0 ...b comes first
    //here in index of 0 we have key 
// console.log(arr1) 

for(let [x] of arr1)
{
  console.log(arr1[x][1])
}
console.timeEnd()
// const result=[]
// wordmap.forEach(function(value,key)
// {
//      result[key]=value;
// })
// // console.log(result)
// for(let x of result)
// {
//     if(x!=undefined) console.log(x)
// }



}

const M = 3;
const A = "java";
const inputs = [
      "I hate java",
      "Python is a good programming language",
      "Java java "
];

sortText(M, A, inputs);



