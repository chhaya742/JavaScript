let n=require("readline-sync");
let num=parseInt(n.question("enter number: "));
for (let i=1;i<=num;i++) {
    for (let j=1; j<=10;j++){
        multi=i*j;

       console.log(j + "*" + i + "=" + multi)
    }
    console.log()

   }