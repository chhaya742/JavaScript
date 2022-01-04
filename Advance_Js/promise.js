// var data=new Promise(function(resolve,reject) {
//     setTimeout(()=>{resolve('new stats')},2000)
// })
// data.then(function(val) {
//     console.log(val);
    
// })

const obj1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        roll_no=[1,2,3,4,5]
        resolve(roll_no)
        // reject("error")
    },2000)
})
let biodata=(indexdata)=>{
    return new Promise((resolve,reject)=>{
        setTimeout((indexdata)=>{
            data={name:'chhaya',
                age:23,
                salary:45000}
                resolve(`My roll number is ${indexdata} my name is ${data.name} and i m ${data.age} years old `)
                // reject("error")
        },1000,indexdata)
    })}
obj1.then((rollno)=>{
    console.log(rollno);
    return biodata(rollno[1])
    

}).then((data)=>{
    console.log(data);

}).catch((error)=>{
    console.log(error);})
