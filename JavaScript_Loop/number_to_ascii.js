let n=require("readline-sync");
let choose_ascii=n.questionInt("enter number: ");
var ascii_char=96+choose_ascii
var a=String.fromCharCode(ascii_char)
console.log(a);
