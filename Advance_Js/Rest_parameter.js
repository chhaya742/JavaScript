// function sum(...array) {
//     console.log(array);
//     let total=0
//     for(i of array){
//         total+=i
//     }    
//     console.log(total);
// }
// sum(1,2,3,4,5,6,7,8,9,10)

// example
function fun(a,b,...c) {
    console.log(`${a} ${b}`);
    console.log(c);
    console.log(c[0]);
    console.log(c.length);
    console.log(c.indexOf('karuna'));
    
}
fun('chhaya','priyanka','saloni','nikita','karuna')