// a=[1,2,1,2,1,3,2,3]
// var b=[]
// for (var i of a){
//     if (! b.includes(i)){
//         b.push(i)}
// }
// var h=0
// for(var j of b){
//     var c=0
//     for (var k of a){
//         if (j==k){
//             c+=1
//         }

//     }
//     h+=Math.floor(c/2)   
// }
// console.log(h)
//   // Write your code here
// // sockMerchant([1,2,1,2,1,3,2,3])

// function sockMerchant(...a){
//     // a=[1,2,1,2,1,2,3]
//     var b=[]
//     for (var i of a){
//         if (! b.includes(i)){
//             b.push(i)
//         }
//     }
//     var h=0
//     for(var j of b){
//         var c=0
//         for (var k of a){
//             if (j==k){
//                 c+=1
//             }
    
//         }
//         h+=Math.floor(c/2)   
//     }
//     console.log(h)
//       // Write your code here
//     }
// sockMerchant(1,2,1,2,1,2,3)
    
// const num=require("readline-sync")
// let size=num.questionInt("enter size")
// var e=[]
// for (var i=0; i<size;i++){
// ar=num.questionInt("enter number")
// e.push(ar)
// }
// console.log(e);

// function sockMerchant( ){
//     a=[1,2,1,2,1,2,3]
//     var b=[]
//     for (var i of a){
//         if (! b.includes(i)){
//             b.push(i)
//         }
//     }
//     var h=0
//     for(var j of b){
//         var c=0
//         for (var k of a){
//             if (j==k){
//                 c+=1
//             }
    
//         }
//         h+=Math.floor(c/2)   
//     }
//     console.log(h)
      // Write your code here
    // }
    // const num=require("readline-sync")
    // let size=num.questionInt("enter size")
    // var e=[]
    // for (var i=0; i<size;i++){
    // ar=num.questionInt("enter number")
    // e.push(ar)
    // }
    // console.log(e);
    // sockMerchant()


//QUESTION NUMBER FIRST
// var arr=[]
// var a=0,b=1
// for (var i=0;i<=11;i++){
  
//   console.log(a);
//   var c=a+b
//   a=b
//   b=c

// }

// QUESTION NUMBER SECOND
// const read=require("readline-sync")
// let user=read.questionInt("enter size")
// var arr=[]
// var a=0,b=1
// for (var i=0;i<=user;i++){
//   arr.push(a)
//   console.log(a);
//   var c=a+b
//   a=b
//   b=c

// }

// QUESTION NUMBER THIRD
// const read=require("readline-sync")
// var arr=[]
// var a=0,b=1
// for (var i=0;i<=10000;i++){
//   arr.push(a)
//   var c=a+b
//   a=b
//   b=c

// }
// let user1=read.questionInt("enter number")
// if (arr.includes(user1)){
//   console.log("yes");
// }
// else{
//   console.log("no");
// }

// QUESTION NUMBER FORTH
// const read=require("readline-sync")
// var n=read.questionInt("enter number")
// k=read.questionInt("enter number")
// var arr=[]
// var a=0,b=1
// for (var i=0;i<=10000;i++){
//   arr.push(a)
//   var c=a+b
//   a=b
//   b=c}
// var c=n*k
// console.log(c);
// for (var i=0;i<arr.length;i++){
//   if (c==i){
//     console.log(i+'th position number is ',arr[i] );
//   }
// }


// var arra=['chhaya','madam','chhaya','sharma']
// for (var i of arra){
//   var a=[]
//   for (var j=i.length-1;j>=0;j--){
//     a.push(i[j])
// }console.log(a);}

  
// 

var arra=['chhaya','madam','mom','sharma','nayan']
var count=0
count1=0
for (var i of arra){
  var a=''
  for (var j=i.length-1;j>=0;j--){
    a+=i[j]}
if (a==i){
    count+=1
}
else{
    count1+=1
}}
console.log('palindrome',count);
