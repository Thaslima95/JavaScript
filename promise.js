//promise
// let completed=false;
// const newPromise=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         if(completed)
//         {
//             resolve("I have completed the javascript course")
//         }
//         else{
//             reject("I don't learn javascript at all")
//         }

//     },2000)//denotes number of milliseconds wait to execute this function
// })

//catch block will execute on error
//finally block execute always even the promise is resolved or reject it will executes always

// newPromise.then((message)=>console.log(message)).catch((error)=>console.log(error)).finally(()=>console.log("Final block executed"))


//promise.all

// const p1 = new Promise((resolve) => setTimeout(resolve, 1000, 'payment is done'));
// const p2 = new Promise((resolve) => setTimeout(resolve, 500, 'shipper rejects the order'));
// const p3 = new Promise((resolve) => setTimeout(resolve, 200, 'delivery date confirmed'));

const p1=new Promise((resolve,reject)=>{
    if(true)
    {
        console.log("promise resolved")
    }
    else{
        console.log("Promise rejected")
    }
})
p1.then((messgae)=>console.log(messgae))

// //promise will return the result at higher value of timeout
// async function parallel()
// {
//     const promises=[p1,p2,p3];
//     const [r1,r2,r3]=await Promise.all(promises)
//     return `promise results are ${r1},${r2},${r3}`
// }

// parallel().then((res)=>{
//     console.log(res)
//     console.log("Order Confirmed")
// }).catch((e)=>console.log(e))

//promise.all with reject
// let stock=0;
// const p1 = new Promise((resolve) => setTimeout(resolve, 1000, 'payment is done'));
// const p2 = new Promise((resolve,reject) => setTimeout(()=>{
//     if(stock==0)
//     {
//         reject("Shipper rejects the order")
//     }
//     else{
//         resolve("Shipper confirms the order")
//     }
// },300));
// const p3 = new Promise((resolve) => setTimeout(resolve, 200, 'delivery date confirmed'));


// async function parallel()
// {
//     const promises=[p1,p2,p3];
//     const [r1,r2,r3]=await Promise.all(promises)
//     return `promise results are ${r1},${r2},${r3}`
// }

// parallel().then((res)=>{
//     console.log(res)
//     console.log("Order Confirmed")
// }).catch((e)=>console.log(e))

//promise.race
// const p1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Thaslima'));
// const p2 = new Promise((resolve) => setTimeout(resolve, 100, 'Aafiya'));
// const p3 = new Promise((resolve) => setTimeout(resolve, 200, 'Nizam'));

// //promise.race returns one result that is which promise is resolved or reject first
// async function parallel()
// {
//     const promises=[p1,p2,p3];
//     const result=await Promise.race(promises)
//     return `Winner is ${result}`
// }

// parallel().then((res)=>{
//     console.log(res)
// }).catch((e)=>console.log(e))


// let rest=true;
// const p1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Nizam'));
// const p2 = new Promise((resolve,reject) => setTimeout(()=>{
//     if(rest==true)
//     {
//         reject("Aafiya leaves the race")
//     }
//     else{
//         resolve("Aafiya")
//     }
// },100));
// const p3 = new Promise((resolve) => setTimeout(resolve, 200, 'Thaslima'));


// async function parallel()
// {
//     const promises=[p1,p2,p3];
//     const result=await Promise.race(promises)
//     return `Winner is ${result}`
// }

// parallel().then((res)=>{
//     console.log(res)
// }).catch((e)=>console.log(e))



//promise.any doesn't care about the rejected promises
// let rest=true;
// const p1 = new Promise((resolve) => setTimeout(resolve, 1000, 'Nizam'));
// const p2 = new Promise((resolve,reject) => setTimeout(()=>{
//     if(rest==true)
//     {
//         reject("Aafiya leaves the race")
//     }
//     else{
//         resolve("Aafiya")
//     }
// },100));
// const p3 = new Promise((resolve) => setTimeout(resolve, 200, 'Thaslima'));


// async function parallel()
// {
//     const promises=[p1,p2,p3];
//     const result=await Promise.any(promises)
//     return `Winner is ${result}`
// }

// parallel().then((res)=>{
//     console.log(res)
// }).catch((e)=>console.log(e))


//promise.any catch error only if all the promises are rejected
// let rest=true;
// const p1 = new Promise((resolve,reject) => setTimeout(()=>{
//     if(rest==true)
//     {
//         reject("promise rejected everyone leaves the race")
//     }
//     else{
//         resolve("Aafiya")
//     }
// },1000));
// const p2 = new Promise((resolve,reject) => setTimeout(()=>{
//     if(rest==true)
//     {
//         reject("promise rejected everyone leaves the race")
//     }
//     else{
//         resolve("Aafiya")
//     }
// },100));
// const p3 = new Promise((resolve,reject) => setTimeout(()=>{
//     if(rest==true)
//     {
//         reject("promise rejected everyone leaves the race")
//     }
//     else{
//         resolve("Aafiya")
//     }
// },500));

// async function parallel()
// {
//     const promises=[p1,p2,p3];
//     const result=await Promise.any(promises)
//     return `Winner is ${result}`
// }

// parallel().then((res)=>{
//     console.log(res)
// }).catch((e)=>console.log(e))






// //promise chaining
// const getProfile=new Promise((resolve,reject)=>{
//     resolve("Profile")
// })
// // console.log(getProfile)

// const getfreidnsofProfile=new Promise((resolve,reject)=>{
//     reject("No list of friends")
// })

// const getfemalefriendsofProfile=new Promise((resolve,reject)=>{
//     resolve("List of Female freinds of profile")
// })

// getProfile.then((profile)=>{
//     //console.log(profile)
//     getfreidnsofProfile.then((getFrndsprofile)=>{
//         //console.log(getFrndsprofile)
//         getfemalefriendsofProfile.then((femalefirends)=>{
//             console.log(femalefirends)
//         })
//     })
// })


//async await code
//  async function getFemaleFreind(){
//     const profile=await getProfile;
//     const getfreidsProfile=await getfreidnsofProfile;
//     const getFemaleFreinds= await getfemalefriendsofProfile;
//     return getFemaleFreinds;
// }
// getFemaleFreind().then((femalefriends)=>console.log(femalefriends))

//async await with reject promise

// const getProfile=new Promise((resolve,reject)=>{
//     resolve("Profile")
// })
// // console.log(getProfile)

// const getfreidnsofProfile=new Promise((resolve,reject)=>{
//     reject("No list of friends")
// })

// const getfemalefriendsofProfile=new Promise((resolve,reject)=>{
//     resolve("List of Female freinds of profile")
// })


//  async function getFemaleFreind(){
//     const profile=await getProfile;
//     const getfreidsProfile=await getfreidnsofProfile;
//     const getFemaleFreinds= await getfemalefriendsofProfile;
//     return getFemaleFreinds;
// }
// getFemaleFreind().then((femalefriends)=>console.log(femalefriends)).catch((error)=>console.log(error))