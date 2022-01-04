const read=require("readline-sync")
var marks=read.questionInt("enter marks")
if (marks<25)
{
    console.log("F")
}
else if ( marks>=25 && marks<45)
{
    console.log("E")
}
else if (marks>=45 && marks<50)
{
    console.log("D")
}
else if(marks>=50 && marks<60)
{
    console.log("C")
} 
else if ( marks>=60 && marks<80)
{
    console.log( "B")
}
else{
  console.log( "A")}
