const person = {
    _name:'anu',
    age:20,
    status:'student'
}

const keys = Object.keys(person)
const values = Object.values(person)

console.log(keys, values)

const result = Object.entries(person)
console.log(result)

//map method to get the keys from result array
const keyss = result.map((item)=>{
    const [first, second] = item
    return first
})

//using for of loop
for(const [first, second] of result){
 
    console.log(first, second)
}