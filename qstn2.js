const input="is1 Thi0s T3est 2a";
const result=[]
//splitting strings into array of words
const words=input.split(' ')//[ 'is1', 'Thi0s', 'T3est', '2a' ]
console.log(words)
const s=words.map((e)=>
{
    //Extracting the digit from individual words matching with regex condition
    //Pushing to result array corresponding to index position that we have extracted
    //replacing the number using replace builtin functions.
result[e.match(/(\d+)/)[0]]=e.replace(/\d+/, '')
})
console.log(result.join(' '))//Again using join converting array to string
