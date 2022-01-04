// function sum(a,b,c) {
//     console.log(a+b+c);
    
// }
// var arrv1=[1,2,3]
// sum.apply(null,arrv1)

/*it reaplace apply() method */


// function sum(a,b,c) {
//     console.log(a+b+c);
    
// }
// var arrv1=[4,2,3,4]
// sum(...arrv1)

// a=['my name is chhaya bagwan']
// console.log(a);
// console.log(...a);


/* it replace concat()*/

// var arr1=[1,2,3]
// var arr2=[4,5,6]
// arr3=[7,8,9]

// arr1=arr1.concat(arr2,arr3)
// arr1=[...arr1,...arr2,...arr3]
// console.log(arr1);

/* it replace coppy() */

let varrc1=[1,2,3]
let varrc2=0
// let varrc2=varrc1
// varrc2.push(4,5)

varrc2=[...varrc1,4,5,6]
console.log(varrc2);
console.log(varrc1);


