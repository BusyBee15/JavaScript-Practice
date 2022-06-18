const first = document.getElementById('ClassList-first')
const second = document.getElementById('ClassList-second')
const third  = document.getElementById('ClassList-third')

//className  - allows us to check for the classname, as well as chnage the classname or add a new class name

console.log(first.className)
second.className = 'text'

third.classList.add('colors')
// some more code
third.classList.add('text')
// third.classList.add('text','colors')

console.log(third.classList)

third.classList.remove('text')

console.log(third.classList.contains('colors'))