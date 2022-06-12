
// primitive data type
const num =  2;
 let num2 = num;


 num2 = 3;
// though we change the value of num2, it won't affect num - when assigning, we are assigning the value not the reference
console.log(`the first number is ${num}`)
console.log(`the second number is ${num2}`)

let person = {name:'bob'}
let person2 = person
person2.name = 'anna'


// but here, when we change the value using the second var, first one's value will also be chnaged, because here, when we were assigning , we assigned the reference, so any chnages made will reflect everywhere 
console.log(`first person name is ${person.name}`)
console.log(`second person name is ${person2.name}`)


// how to avoid this
// we need to get just the copy of the ibject, not the refrence to the object
// how are we gonna copy the object - spread operator ES6


let person3 = {name:'bob', age:21}
let person4 = {...person3}
person4.name = 'anna'

// now see, original object will not be chnaged
console.log(`first person name is ${person3.name}`)
console.log(`second person name is ${person4.name}`)