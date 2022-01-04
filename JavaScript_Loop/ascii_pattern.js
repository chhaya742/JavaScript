let n=require("readline-sync");
let choose_ascii=n.questionInt("enter number: ");
var ascii_char=97+choose_ascii
var a=String.fromCharCode(ascii_char)
// s=''
for (i=97; i<ascii_char;i++){
    s=''
    var a=String.fromCharCode(i)
    for (j=1;j<=5;j++)
    {
        s+=a
    }
   
// s+=a
console.log(s) 
}
// console.log(s) 
