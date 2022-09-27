function createPerson(firstName, lastName){
    return {
        firstName:firstName,
        lastName:lastName,
        fullName:function(){
           console.log(`${this.firstName} ${this.lastName}`)
        }
    }
}

console.log(
createPerson('anu', 'hp')
);

createPerson('abc', 'def').fullName()


// constructor function

function Person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = function(){
           console.log(`${this.firstName} ${this.lastName}`)
        }
}


const anu = new Person('anu', 'hp')
// constructor property

console.log(anu);
console.log(anu.constructor);



const bob = {}
console.log(bob.constructor);

const list = []
console.log(list.constructor);

function check(){

}

console.log(check.constructor);


const someone = new anu.constructor("some", "one")
console.log(someone);

