//one level of closure

// function x()
// {
//     var a=10;
//     function y()
//     {
//         //even the y function doesn't have local variables
//         //but it can acces the parent function variable
//         console.log(a)
//     }
//     return y;
// }
// //even the outer function completes still the inner function remembers the variables.
// var z=x();
// z()
// // console.log(z)


// function x()
// {
//     var a=10;
//     function y()
//     {
//         console.log(a)//80 will print
//     }
//     a=80;
//     return y;
// }
// //even the outer function completes still the inner function remembers the variables.
// var z=x();
// z()

//two level of closure
// function z()
// {
//     var a=80;
//     function y()
//     {
//         var b=60;
//         function x()
//         {
//             console.log(a*b)
//         }
//         x()
//     }
//     y()
// }

// z()

function greeting(message)
{
    return function(name)
    {
        return `${message} ${name}`
    }
}

var sayHi=greeting('Hi')
var sayHello=greeting('Hello')


console.log(sayHi('Thaslima'))
console.log(sayHello('Banu'))


