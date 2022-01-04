const read=require("readline-sync")
var var1= quantity=read.questionInt("enter quantity ")
if ( quantity*100 > 1000)
{
    console.log("Cost is",((quantity*100)-(.1*quantity*100)))
}
else
{
    console.log("Cost is",quantity*100)
}


