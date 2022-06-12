//name collision
let name = 'anna'
name = 'poorna'

// const name = 'abc' is not alllowed again

// modifying by mistake

function calculate(){
    console.log(name)
    name = 'orange' // by mistake
    const var1 = 'abc'
    var2 ='am'
}
calculate()
console.log(var2)

if(true){
    console.log(name)
    name = 'bob' // by mistake
}
calculate()
console.log(`my name is ${name} and I'm awesome`)