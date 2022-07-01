const people = [
    {
        name:'bob',
        age:20,
        position:'developer'
    },
    {
        name:'anna',
        age:25,
        position:'designer'
    },
    {
        name:'susy',
        age:30,
        position:'the boss'
    }
]


const ages = people.map(person=>'hello')
console.log(ages)

const newPeople = people.map((person)=>{
    return {
        firstname: person.name.toUpperCase(),
        age: person.age+2
    }
})
console.log(newPeople)

const names = people.map((person) => `<h2>${person.name}</h2>`)
const result = document.querySelector('#result')
result.innerHTML = names.join('')