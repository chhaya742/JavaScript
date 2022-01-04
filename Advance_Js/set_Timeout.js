// function user1(id,cb){
//     setTimeout(()=>{
//         cb({id:id,name:'chhaya'})
//     },5000)
// }
// function user2(id,cb){
//     setTimeout(()=>{
//         cb({id:id,name:'saloni'})
//     },4000)
// }
// function user3(id,cb){
//     setTimeout(()=>{
//         cb({id:id,name:'sanjna'})
//     },3000)
// }
// function user4(id,cb){
//     setTimeout(()=>{
//         cb({id:id,name:'nikita'})
//     },2000)
// }
// function user5(id,cb){
//     setTimeout(()=>{
//         cb({id:id,name:'karuna'})
//     },6000)
// }
// user1(1,(userdetail1)=>{console.log('user1 details',userdetail1);})
// user2(2,(userdetail2)=>{console.log('user1 details',userdetail2);})
// user3(3,(userdetail3)=>{console.log('user1 details',userdetail3);})
// user4(4,(userdetail4)=>{console.log('user1 details',userdetail4);})
// user5(5,(userdetail5)=>{console.log('user1 details',userdetail5);})



// function user(){
//     setTimeout(a=(a,b)=>{console.log(a+b)},5000),a(4,5)}
// user()

function gettingrollno(){
    setTimeout(()=>{
        let arr=[1,2,3,4,5,6]
        console.log(arr);
        setTimeout((rollno)=>{
            const biodata={
                name:'chhaya',
                age:34
            }
            console.log(`My roll no is ${rollno}.my name is ${this.name} and my age is ${this.age} years old`);
        },2000,arr[1])
    },2000)
}
gettingrollno();