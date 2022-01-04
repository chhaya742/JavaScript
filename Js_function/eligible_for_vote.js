function eligible_for_vote(age){
    if(age>18){
        console.log("yes you are eligible");
    }
    else{
        console.log("not eligible");
    }


}
console.log( 'Consider minimum age of voting to be 18.' )
const read=require("prompt-sync")();
let prompt=read("enter age")
eligible_for_vote(prompt)