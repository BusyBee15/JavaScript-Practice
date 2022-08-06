function makeUpperCase(value){
    // console.log(value.toUpperCase())
    reverseString(value.toUpperCase())
}
// makeUpperCase('peter')

function reverseString(value){
    value.split('').reverse().join('')
}

function handleName(name, cb){
    const fullname = `${name} smith`
    cb(fullname)
    //some more logic 

}

handleName('peter', makeUpperCase)

handleName('anu' , function(value){
   console.log(value)
})

handleName('anu', (value) => console.log(value))