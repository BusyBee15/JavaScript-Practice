// define 
var number = 100
console.log(number);

// update 
number = 200
console.log(number);

// redefine 
var number = 'orange'
console.log(number);


let amount = 100
console.log(amount);

// update
amount = 200
console.log(amount);

// redefine 
// let amount = 200

const num = 100
console.log(num);

const person = {name:'anu'}
person.name = 'abc'
console.log(person.name);

// Function scope and Block scope

// VAR
// global scope
var amount1 = 100

function greet(){
    // function scope
    var random = 'random value'
    console.log(amount1, random);
    console.log('hello');
}
greet()

// console.log(random);


// LET 
// var total = 1000
// var test = true
// if(test){
//     var total = 20
//     console.log('hello');
// }
// console.log(total);

let total = 1000
let test = true
if(test){
    let total = 20
    let varr = 'random'
    console.log('hello');
}
console.log(total);


console.log(a);
var a = 2