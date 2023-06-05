// function sum(a,b,callback)
// {
//     let result=a+b;
//     return  callback(result)
    
// }

// function myfunction(x)
// {
  
//     console.log(`sum of numbers is ${x}`)
    
// }


// sum(2,3,myfunction)


// setTimeout(function(){
//     console.log("Message will be displayed after 2m.s")
// },2)

//callback as an arrow function
// setTimeout(()=>console.log("Arrow call back"),2000)


const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a Callback
const posNumbers = removeNeg(myNumbers, function(x){return res=x>=0?true:false
    
});

// Display Result
// document.getElementById("demo").innerHTML = posNumbers;
console.log(posNumbers)

// Remove negative numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}






