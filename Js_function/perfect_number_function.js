function perfect(num) {
    f=0
    for(var i = 1; i < num; i++){
        if (num%i==0){
            f+=i
        }
    
}
if (f==num){
    console.log("perfect");
}
else{
    console.log("not perfect");
}}
const prompt=require("prompt-sync")();
let user=prompt("enter number")
perfect(user)