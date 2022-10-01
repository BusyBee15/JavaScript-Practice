//returns undefined
console.log(nickname);

// reference errors
// console.log(firstName);
// console.log(lastname);


const firstName = 'Anu'
let lastname = 'hp'
var nickname = 'busybee'

console.log(firstName);

// works only if all the variables inside the function are defined before invoking the function 
const num1 = 4

display()

const num2 = 3

function display(){
    console.log(num2);
    console.log('hello world');
}