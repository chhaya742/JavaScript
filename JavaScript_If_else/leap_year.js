const read=require("readline-sync")
var r=read.questionInt("enter year")
if (r%400==0 || r%4==0 ||r%100==0)
{
    console.log("leap year")
}
else{
    console.log("not")
}



