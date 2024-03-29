// forEach - 
//it doesn't return new array

const people = [
    {name:'bob', age:21, position:'developer', salary:200, id:1},
    {name:'peter', age:22, position:'designer',salary:300, id:2},
    {name:'susy', age:31, position:'the boss',salary:500, id:3},
    {name:'susy', age:31, position:'the boss',salary:500, id:4},

]


function showPerson(person){
    //recall, we can access items of the array here, since this will be passed as a callback
    console.log(person.position.toUpperCase())
}
people.forEach(showPerson)

//passing the cb(anonymous) directly
people.forEach(function(item){
   console.log(item.name.toLocaleUpperCase())
})



// map

const ages = people.map(function(person){
    return person.age
})
console.log(ages)

//  iterate over the array using map, then we will pull out the name value, place it it heading 1, display it on screen

const names = people.map(function(person){
    return `<h1>${person.name}</h1>`
})
document.body.innerHTML = names.join('')
console.log(names)

//filter
const youngPeople = people.filter(function(person){
    return person.position === 'developer'
})
console.log(youngPeople)

//find

const person = people.find(function(person){
    return person.id === 2
})
console.log(person)

// to demonstrate that it return first matched instance
console.log(people.find(function(person){
    return person.name === 'susy'
}))




// reduce 

// Asuume we are the owners of the company, we want to calculate how much our team costs us daily

const total = people.reduce(function(acc, currItem){
    acc += currItem.salary
    return acc
}, 0)

console.log(total)
