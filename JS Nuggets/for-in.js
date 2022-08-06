const person = {
    _name:'anu',
    age:20,
    status:'student'
}

for(const propertyName in person){

    console.log(`${propertyName} : ${person[propertyName]}`)

}