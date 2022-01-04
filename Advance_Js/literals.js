

// cannot use the same quotes
const str2 = 'A "quote" inside a string';  // valid code
// const str3 = 'A 'quote' inside a string';  // Error

const str4 = "Another 'quote' inside a string"; // valid code
// const str5 = "Another "quote" inside a string"; // Error

// To use the same quotations inside the string, you can use the escape character \.

// escape characters using \
const str3 = 'A \'quote\' inside a string';  // valid code
const str5 = "Another \"quote\" inside a string"; // valid code

// Instead of using escape characters, you can use template literals. For example,
const str1 = `This is a string`;
const str6 = `This is a string with a 'quote' in it`;
const str8= `This is a string with a "double quote" in it`;


// using the + operator
const message1 = 'This is a long message\n' + 
'that spans across multiple lines\n' + 
'in the code.'

console.log(message1)

const message2 = `This is a long message
that spans across multiple lines
in the code.`

console.log(message2)


const name = 'Jack';
console.log(`Hello ${name}`); 

// template literals used with expressions


const names = 'Jack';
console.log(`Hello ${names}`); 

// template literals used with expressions

const result1 = `The sum of  4 + 5 is ${4 + 5}`;
console.log(result1); 

console.log(`${result1 < 1 ? 'Too low': 'Very high'}`)


