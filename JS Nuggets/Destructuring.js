const fruits = ['orange', 'banana', 'lemon']
const friends = ['john', 'peter', 'bob', 'anna', 'kelly']

const fruit1 = fruits[0];
const fruit2 = fruits[1];
const fruit3 = fruits[2];

console.log(fruit1, fruit2, fruit3)

let [john , , bob] = friends
console.log(john, bob)

//swapping variables
let first = 'bob'
let second = 'john'

// let temp = second
// second =  first
// first = temp 

[second, first] = [first, second]