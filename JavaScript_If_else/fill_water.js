var read=require("readline-sync")
var water=read.questionInt("enter water quantity")
if (water<=1)
{
    console.log("need to fill more water")
}
else if (water>1 && water<=10)
{
    console.log("no need to fill water more")
}
else{
    console.log("water is overflow")
}