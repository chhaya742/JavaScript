const interviewque=(name)=>{
    if (name=='chhaya'){
        return function(topic) {
            console.log(`hy ${name}. what is ${topic} plz explai us`)}
    }
    if (name=='karuna'){
        return function(topic) {
            console.log(`hy ${name}. what is ${topic} plz explai us`)}
        }
        
    if (name=='sloni'){
        return function(topic) {
        console.log(`hy ${name}. what is ${topic} plz explai us`)}
        }
    if (name=='sanjna'){
        return function(topic) {
                console.log(`hy ${name}. what is ${topic} plz explai us`)}
        }
    else{
        console.log();
    }
}

const read=require("readline-sync")
let name=read.questionInt("enter name")
topic=read.questionInt("enter name")
first=interviewque(name);
first(topic)
