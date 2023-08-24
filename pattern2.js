//  Print the word with odd letters as

// P         M
//  R      A
//    O  R
//      G
//   O    R
//  R       A
// P          M  

let word="PROGRAM";
for(let i=0;i<word.length;i++)
{
    let row=" ";
    for(let j=0;j<word.length;j++)
    {
        if(j==i || j==word.length-i-1)
      
        {
              console.log(j)
              console.log(word.length-i-1)
            row+=word[j]
        }
        else{
            row+=' '
        }
    }
    console.log(row)
}

