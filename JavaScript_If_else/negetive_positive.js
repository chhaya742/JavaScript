const prompt_=require('prompt-sync')
const prompt=prompt_()
var num1=prompt("enter a number")
if (num1>0)
{
    console.log("number is positive");
}
else if(num1<0)
{
    console.log("number is negetive");
}
else{
    console.log("number is zero");
}
