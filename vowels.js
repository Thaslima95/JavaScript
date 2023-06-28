// function removeVowels(str) {
//   const vowels = ['a', 'e', 'i', 'o', 'u'];
//   let result = '';
//  let arr=str.split("")
//  let arr2=[]

//  for(let i=0;i<arr.length-1;i++)
//  {
//   arr2.push(arr[i])
//     if(vowels.includes(arr[i].toLowerCase()))
//     {
//         console.log(arr[i-1],arr[i])
//         console.log(arr[i])
//         if(arr[i-1]==arr[i] )
//         {
//           console.log(arr.indexOf(arr[i-1]))
//           console.log(arr.lastIndexOf(arr[i-1]))
//             if(( arr[i]==arr[i-1] ))
//             {
             
//               result+=arr[i-1]+arr[i];
//               i++;
//             }
//            else{
//             result+=arr[i-1]+arr[i]
//            }
//         }
        
//     }else{
//         result+=arr[i]
//     }
//  }
//   return result;
// }
// console.log(removeVowels("Compaaatear"))



// x=input()
// array=[]
// array2=["a","e","i","o","u"]
// for i in range(len(x)):
//     array.append(x[i])
// for k in range(len(array)-1):
//     if array[k] in array2:
//         if array[k+1] == array[k]:
//             break;
//         else:
//             array.remove(array[k])
// print('.join(array))

// function removeVowels(str) {
// var l=/^[aeiou]$/gi;
//  let s1=""
// if (str.length==0){
//     return str;
// }
// else if(str.length==1){
//     if(!l.test(str[0]))
//     return str;
// }
// else{
//     if (l.test(str[0]) && l.test(str[1]) ){
//         s1+=str[0]
//     }
//     else if(!(l.test(str[0])) ){
//         s1+=str[0]
//     }

// for (let i=1;i<str.length-1;i++){
//     console.log("inside for")
// console.log((l.test(str[i-1])) && !(l.test(str[i])) && (l.test(str[i+1])))
//     if(!(l.test(str[i-1])) && (l.test(str[i])) && !(l.test(str[i+1]))){
//      continue;
//     }
    
//     s1+=str[i]
// }
// }
// return s1;

//   }
//   console.log(removeVowels("cooolgate"))

  function removVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let s1 = "";
    
    if (str.length === 0) {
        return "";
    } else if (str.length === 1) {
        if (!vowels.includes(str[0])) {
            return str;
        }
    } else {
        if (vowels.includes(str[0]) && vowels.includes(str[1])) {
            console.log((vowels.includes(str[0])+" "+str[0]))
            console.log(vowels.includes(str[1])+ " "+ str[1])
            s1 += str[0];
        } else if (!vowels.includes(str[0])) {
            console.log((vowels.includes(str[0])+" "+str[0]))
            s1 += str[0];
        }
        
        for (let i = 1; i < str.length ; i++) {
            console.log("insode for")
            console.log(!vowels.includes(str[i-1])+ " "+ str[i-1])
            console.log(vowels.includes(str[i])+ " "+ str[i])
            console.log(!vowels.includes(str[i+1])+ " "+ str[i+1])
            console.log(i +  " ")
            if (!vowels.includes(str[i-1]) && vowels.includes(str[i]) && !vowels.includes(str[i+1])) {
                continue;
            }
            console.log(s1)
            console.log(str[i])
            s1 += str[i];
            console.log(s1)
        }
    }
    
    return s1;
}

console.log(removVowels('cooolgates'))


// var l=/[aeiou]/gi;
// let input="compuuter";
// input+=" "
// s1=""
// if (input.length==0){
//     console.log("");
// }
// else if(input.length==1){
//     if(input[0]!= 0)
//     console.log(input);
// }
// else{
//     if (input[0]==l && input[1]==l){
//         s1+=input[0]
//     }
//     else if(input[0]!=l){
//         s1+=input[0]
//     }
// }
// for (let i=1;input.length;i--){
//     if(!input[i-1]==l && input[i]==l && !input[i+1]==l)
//     continue
//     s1+=input[i]
// }
// console.log(s1);