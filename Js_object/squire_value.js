const read=require("readline-sync")
let var1=read.questionInt('enter number')
i=1
dict1={}
while(i<=var1){
    dict1[i]=i*i
    i+=1
}
console.log(dict1);