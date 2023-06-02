// const realarray=['a','b','c'];

const arrayLike={
    0:'a',
    1:'b',
    2:'c',
    length:3
}

// realarray.map((e)=>console.log(e))

//arrayLike.map();//It will throw error

// var arr=Object.values(arrayLike)

// arr.map((e)=>console.log(e))

const arr3 = Object
   .keys(arrayLike)
   .map((key) => console.log(arrayLike[key]));
