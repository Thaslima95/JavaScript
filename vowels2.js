function removeVowels(str) {
var l=/^[aeiou]$/gi;
 let s1=""
if (str.length==0){
    return str;
}
else if(str.length==1){
    if(!l.test(str[0]))
    return str;
}
else{
    if (l.test(str[0]) && l.test(str[1]) ){
        console.log((l.test(str[0])==true) +" "+str[0] )
        console.log(l.test(str[1])+ " "+ str[1])
        s1+=str[0]
    }
    else if(!(l.test(str[0])) ){
        console.log(l.test(str[0]) +" "+str[0])
        s1+=str[0]
    }

for (let i=1;i<str.length-1;i++){
    console.log("inside for")
console.log((l.test(str[i-1])!=true) + "  "+str[i-1])
console.log(l.test(str[i]) + "  "+str[i])
console.log((l.test(str[i+1])!=true) + "  "+str[i+1])
    if((l.test(str[i-1])!=true) && (l.test(str[i])) && (l.test(str[i+1])!=true)){
     continue;
    }
     console.log(s1)
     console.log(str[i])
    s1+=str[i]
    console.log(s1)
}
}
return s1;

  }
  console.log(removeVowels("addfgsfa"))