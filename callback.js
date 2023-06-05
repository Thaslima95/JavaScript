function sum(a,b,callback)
{
    let result=a+b;
    callback(result)
}

function callback(res)
{
    console.log(`sum of numbers is ${res}`)
}

sum(2,3,callback)