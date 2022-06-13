// function that greets a person

function morning(name){
   return `Good morning ${name.toUpperCase()}`
}

function afternoon(name){
   return `Good afternoon ${name.repeat(2)}`
}

function greet(name, cb){
    
    const myName = 'Anu'
    //console.log(` ${name}, my name is ${myName}`)
    // instead of accessing the name directly, invoke the cb that's all
    console.log(` ${cb(name)}, my name is ${myName}`)
}

greet('Monika', morning)
greet('Peter', afternoon)







// function greetMorning(name){
//     const myName = 'Anu'
//     console.log(`Good morning ${name}, my name is ${myName}`)
// }



// function greetAfternoon(name){
//     const myName = 'Anu'
//     console.log(`Good afternoon ${name}, my name is ${myName}`)
// }

// greetAfternoon('Peter')

// greetMorning('Monika')