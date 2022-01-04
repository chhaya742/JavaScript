const read=require("readline-sync")
var var1=read.questionInt("enter patter size")
// for (var i=var1; i>=1; i--)
for (var i=1; i<=var1; i++)
{s=''

    for (j=1;j<=var1; j++)
    {s=s+i+' ';
    }
    console.log(s)

}