const person = {
    name:'john',
    age:25,
    married:true,
    siblings:['anna','peter'],
    greet:function(name){
        console.log(`Hello ${name}`);
    },
    sayHi(name){
        console.log(`Hello ${name}`)
    },
    job:{
        title:'developer',
        company:{
            name:'abc',
            address:"abc"
        }
    }
}

person.age = 30;
console.log(person.age);

//delete property
delete person.married

//set variable as prop-value
age = 20
const obj = {
    age:age
}

// with ES6
const obj1 = {
    age
}

const obj2 = {
    'my-name':anu
}

const name = 'my-name'
console.log(obj2[name]);