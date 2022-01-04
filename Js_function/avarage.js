function average(size){
    sum=0
    count=0
    for (var i=1;i<=size;i++){
        const read=require("readline-sync")
        var var1=read.questionInt("enter number")
        count+=1
        sum+=var1
    }
    console.log("sum of numbers",sum);
    console.log("averag of numbers",sum/count);
}
const read=require("readline-sync")
var var1=read.questionInt("enter size")
average(var1)


