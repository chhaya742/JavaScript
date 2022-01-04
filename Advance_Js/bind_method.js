// const ngo={names:'navgurukul',content:'programming',
//     features:function() {
//         console.log(`love ${this.names} so much and ${this.content}`)
        
//     }


// }
// // ngo.features();
// let ngo2=ngo.features.bind(ngo);
// ngo2();


 priyanka={
    nick:'pinky',
    class:'10 th',
    sub:'math'
     
 }
 chhaya={
    nick:'bagwan',
    class:'12 th',
    sub:'science'

 }
 karuna={
 nick:'kittu',
    class:'11 th',
    sub:'bio'}


function status(avarage){
    console.log(`${this.nick} is very good student.
and she is in ${this.class}
and she is from ${this.sub}
she has rating ${avarage}`);
}
detail1=status.bind(chhaya)
detail2=status.bind(priyanka)
detail3=status.bind(karuna)
detail1(4);
console.log('\n')
detail2(5);
console.log('\n')
detail3(3);
console.log('\n')


