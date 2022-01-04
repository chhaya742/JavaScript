// console.log("chhya")
// const person = {
//     name: 'John',
//     age: 30,

//     // accessing name property by using this.name
//     greet: function() { console.log('The name is' + ' ' + this.name);console.log('and age is'+' '+this.age); }
// };

// person.greet();

// function person(){
    //     this.name='neha',
    //     this.age=20,
    //     this.greet=function great(){
    //     console.log("i love you");
    //     console.log("i love you saloni")
    //     }
    // }
    
    // const person1=new person()
    // console.log(person1);
    
    function Person () {
        this.name = 'John',
        this.age = 23,
    
         this.greet = function () {
            console.log('hello');
        }
    }
    
    // create objects
    const person1 = new Person();
    const person2 = new Person();
    console.log(person1);