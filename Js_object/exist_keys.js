const read=require("readline-sync")
let user=read.question("enter keys:-")
dict1={'name':'Raju', 'marks':56}
var1=dict1.hasOwnProperty(user)
if (var1==true){
    console.log("exist");

}
else{
    console.log("not exist");
}
