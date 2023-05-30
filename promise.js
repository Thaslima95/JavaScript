//promise
let completed=true;
const newPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(true)
        {
            resolve("I have completed the javascript course")
        }
        else{
            reject("I don't learn javascript at all")
        }

    },2000)//denotes number of milliseconds wait to execute this function
})

//catch block will execute on error
//finally block execute always even the promise is resolved or reject it will executes always

newPromise.then((message)=>console.log(message)).catch((error)=>console.log(error)).finally(()=>console.log("Final block executed"))







// //promise chaining
// const getProfile=new Promise((resolve,reject)=>{
//     resolve("Profile")
// })

// const getfreidnsofProfile=new Promise((resolve,reject)=>{
//     resolve("Freinds of Profile")
// })

// const getfemalefriendsofProfile=new Promise((resolve,reject)=>{
//     resolve("List of Female freinds of profile")
// })

// // getProfile.then((profile)=>{
// //     //console.log(profile)
// //     getfreidnsofProfile.then((getFrndsprofile)=>{
// //         //console.log(getFrndsprofile)
// //         getfemalefriendsofProfile.then((femalefirends)=>{
// //             console.log(femalefirends)
// //         })
// //     })
// // })


// //async await code
// async function getFemaleFreind(){
//     const profile=await getProfile;
//     const getfreidsProfile=await getfreidnsofProfile;
//     const getFemaleFreinds=await getfemalefriendsofProfile;
//     return getFemaleFreinds;
// }
// getFemaleFreind().then((femalefriends)=>console.log(femalefriends))
