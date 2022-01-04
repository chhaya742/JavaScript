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
const obj2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        roll_no=[6,7,8,9,10]
        resolve(roll_no)
        // reject("error")
    },2000)
})
// obj1.then((a)=>{

    // console.log(a)
// }).then((a)=>{biodata(a[i])})

async function nam() {
   var a= await obj1
   console.log(a)
   b= await biodata(a[1])
   console.log(b);
    var c=await obj2
   console.log(c)
    
}
nam()
