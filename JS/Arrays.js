let names = ['Anu', 'Monika', 'Sneha', 'Chitra']
let lastNames = ['pepper', 'onion', 'tomato']

console.log(names.length)
console.log(names.concat(lastNames))
console.log(names.reverse())

//unshift
names.unshift('Maya')
console.log(names)

console.log(names.shift())

names.push('Babloo')
console.log(names)

console.log(names.pop())

console.log(names)

const splicedResult = names.splice(1,3)
console.log(names)
console.log(splicedResult)