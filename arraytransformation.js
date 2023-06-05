const users=[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",

  },
  {
    "id": 2,
    "name": "Ervin Howell",
    "username": "Antonette",
    "email": "Shanna@melissa.tv",

  }];

const nameArray=users.map((e)=>e.name);

console.log(nameArray);


//Array to array

//converting array to single new array

const reduceArray=[];
const usernameandemailData=users.reduce((key,value)=>{
  reduceArray.push({username:value.username,emailId:value.email})
  return reduceArray
},{});

// console.log(usernameandemailData);

console.log(reduceArray);

