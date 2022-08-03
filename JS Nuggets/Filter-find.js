const people = [
    {_name:'bob', age:20, position:'developer'},
    {_name:'peter', age:25, position:'designer'},
    {_name:'susy', age:30, position:'boss'},
    {_name:'anna', age:35, position:'intern'},

];

const youngpeople = people.filter((person)=>{
     return person.age < 30
})

console.log(youngpeople);

const developers = people.filter((person)=> person.position==='developer')

//no match
const seniorDevs = people.filter((person)=> person.position==='senior dev')
console.log(seniorDevs)

//find
const peter = people.find((person)=>person._name === 'peter')
console.log(peter);

//no match
const oldperson = people.find((person)=>  person.age > 35)
console.log(oldperson);