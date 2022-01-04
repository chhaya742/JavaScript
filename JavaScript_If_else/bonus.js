const read=require("readline-sync")
var salary=read.questionInt("enter your salary")
year_of_service=read.question("enter your year of service")
if (year_of_service>=5 && year_of_service<10)
{
    console.log("bonus is ",.05*salary)
}
else if (year_of_service>=10 && year_of_service<15)
{
    console.log("bonus is ",.10*salary)
}
else if (year_of_service>=15 && year_of_service<20)
{
    console.log("bonus is ",.20*salary)
}
else if (year_of_service>=20 && year_of_service<=25)
{
    console.log("bonus is ",.30*salary)
}
else{
    console.log("no bonus")
}