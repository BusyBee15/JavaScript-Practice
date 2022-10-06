const name1 = "bob"
const lastName = "sanders"
const age = 21

const phrase = "My full name is " + name1 + " " + lastName + " " + " and I'm " + age + " years old"
console.log(phrase);

const phrase2 = `My full name is ${name1.toUpperCase}`
console.log(phrase2);


const person = {
    name:"anu",
    job:"developer",
    hobbies:['surfing', 'baking', 'bowling']
}

const result = document.getElementById('result')

// result.innerHTML = "<h2>" + person.name + "</h2>" + "<p>" + person.job + "</p>"

// result.innerHTML = `
// <h2>${person.name}</h2>
// <p>${person.job}</p>
// <ul>${person.hobbies.map((item)=>{
//     return `<li>${item}</li>`
// }).join('')}</ul>
// `

// Tagged template literals 
const author = 'some author'
const statement = 'some statement'

const quote = highlight`heere is the ${statement} by ${author} and it could not be more true`
result.innerHTML = quote

function highlight(text, ...vars){
//    console.log(vars);
   const awesomeText = text.map((item, index)=>{
    return `${item} <strong class='blue'>${vars[index] || ""}</strong>`
   }).join('')
   return awesomeText
   
}