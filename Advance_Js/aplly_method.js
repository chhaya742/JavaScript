const object1={
    name:'chhaya',
    surname:'bagwan',
    quality:function qua(rating,support){
        console.log(`${this.name} have one quality she can solve problem realted to programing
her fulname is ${this.name} ${this.surname},i will give ${rating} star.subscrib now ${support} }`)
    }
}

// object1.quality('**')   
const object2={
    name:'karuna',
    surname:'jaiswal',
}
object1.quality.apply(object2,[6,'please']);


