const my_data={
    name:'chhaya',
    age:20,
    deg:'BSc',
    hobbies:{
        first:'play vollieyball',
        sec:'making craft'
    }
}
console.log("we can change keys name");
let {name:my_name,age,deg,hobbies}=my_data

// let name,age,deg;
// ({name,age,deg} = my_data);
console.log(`my name is ${my_name}. 
and my age is ${age}.
and my qualificain ${deg}
i love ${hobbies.sec}`)