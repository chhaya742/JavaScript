function squares_of_numbers(limit){
    var output={}
    for(var i=1;i<=limit;i++){
    output[i]=i*i
    }
    console.log(output);
    }
    squares_of_numbers(20)
const read=require("readline-sync")
let num=read.questionInt("enter limit")
squares_of_numbers(num)