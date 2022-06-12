let text = 'I love learning new things   '

let result = text.length
console.log(result)
console.log(text.length)
console.log(text.toLowerCase())
console.log(text.toUpperCase())
console.log(text.indexOf('leaa'))
console.log(text.indexOf('learn'))
console.log(text.indexOf('l'))
console.log(text.trim())
// fron index 5 till last
console.log(text.slice(5))
console.log(text.slice(0))


// Templaate literals
const name = 'anu'
const age = 21
const sentence = "Hey it's " + name + ' and she is ' + age + 'years old'

console.log(sentence)

const value = `Hey it's ${name} and she is ${age} years old`
console.log(value)

console.log(`${2+2}`)


