const prompt=require("prompt-sync")();
var size=prompt("enter size")
var i=1
dict1={}
while (size>=i){
    name=prompt("enter student name")
    number=prompt("enter marks")
    dict1[name]=number  
    i++  
}
console.log(dict1);

