const object1={
    name:'chhaya',
    surname:'bagwan',
    quality:function qua(rating){
        console.log(`${this.name} have one quality she can solve problem realted to programong
her fulname is ${this.name,this.surname},i will give ${rating} star }`)
    }
}

// object1.quality('**')   
const object2={
    name:'karuna',
    surname:'jaiswal',
}
object1.quality.call(object2,6);


// obj={name:'chhaya',
// age:23,
// quality:function(t){
//     o={first:'writing',
//         second:"reading"}
//         console.log(o,t);
// }}
// obj1={name:'saloni',
// age:12}
// obj.quality.call(obj1,5)


