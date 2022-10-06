// startsWith, endsWith(), includes() , repeat()

const person = 'Peter Smith'
const employee = '23456-EMP-PETER-SMITH'
const manager = '23456-MAN-JOHN-DOE' 

// startsWith
console.log(person.startsWith('Pet'));
console.log(employee.startsWith('EMP', 6));

// endsWith
console.log(person.endsWith('DOE'));
console.log(manager.endsWith('MAN', 9));

// includes
console.log(person.includes('P'));


// repeat
const multiplyPeople = (person, amount=2) => {
    return person.repeat(amount)
}

console.log(multiplyPeople('Anu',3));