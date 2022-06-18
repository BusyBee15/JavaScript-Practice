//parent Element

const heading = document.getElementById('DOM2h2')
// console.log(heading)
// console.log(heading.parentElement)
// console.log(heading.parentElement.parentElement)
// console.log(heading.parentElement.parentElement.parentElement)

const parent = heading.parentElement
console.log(parent)

heading.parentElement.style.backgroundColor = "skyblue"
parent.parentElement.style.backgroundColor = "pink"