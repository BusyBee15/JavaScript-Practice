//previous Sibling
//next Sibling
//return whitespace

const first = document.querySelector('#DOM3-item1')
console.log(first)

// const second = first.nextSibling
const second = first.nextSibling.nextSibling

console.log(second)

const last = document.querySelector('#DOM3-item2')
console.log(last)

const third = last.previousSibling.previousSibling
console.log(third)

//previousElementSibling
console.log(first.nextElementSibling)
