const read=require("readline-sync")
var var1=read.questionInt("enter patter size")
s=''
for (var i=1; i<=var1; i++){
    for(var j=1;j<=i;j++){
        s+=j
    }
    s+="\n"
}
console.log(s)