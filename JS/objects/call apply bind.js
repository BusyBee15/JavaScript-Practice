// call
const john = {
    name:'john',
    age:24,
    greet: function(){
        console.log(this);
        console.log(`${this.name} ${this.age} `);
    }
}

const susan = {
    name:'susan',
    age:21
}

// john.greet()

// this will fail
// susan.greet()
// greet()
// const greet = john.greet
// greet()

function greet(state, country){
     console.log(this);
     console.log(`${this.name} ${this.age} `);
     console.log(state, country);
}

greet.call(susan, 'san diego', 'us')
greet.call(john, 'san diego', 'us')
greet.call({name:'peter', age:20}, 'san diego', 'us')

john.greet.call(susan)


// Apply 
greet.apply(susan, ['san diego', 'us'])
greet.apply(john, ['san diego', 'us'])
greet.apply({name:'peter', age:20}, ['san diego', 'us'])


// Bind
// assign, call it later
const susanGreet = greet.bind(susan, 'first', 'second')
susanGreet()


//Button example
const button = document.querySelector('.bind')
console.log(button)

const counter = {
    count:0,
    increment(){
        console.log(this)
        this.count++
        console.log(this.count);
    }
}

// fails
// button.addEventListener('click', counter.increment)

// works
button.addEventListener('click', counter.increment.bind(counter))

const reference = counter.increment.bind(counter)
button.addEventListener('click', reference)

button.removeEventListener('click', reference)

