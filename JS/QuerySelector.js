
// document.querySelector('body').style.backgroundColor('pink')

const heading = document.getElementById('title')

console.log(heading)

// heading.style.color = "red"

heading.style.color = "red"

const btn = document.querySelector('#btn')
btn.style.color= "red"

const btn2 = document.querySelector('.btn')
btn2.style.color = "blue"

document.querySelector('body').style.backgroundColor = "pink"

const lastItem = document.querySelector('li:last-child')
console.log(lastItem)

const list = document.querySelectorAll('.special')

list.forEach(function(item){
    console.log(item)
    item.style.color="red"
})