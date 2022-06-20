//remove
const heading = document.getElementById('remove-heading')
heading.remove()

const parent = document.getElementById('remove-div')
// parent.querySelector('h1').remove()
//or
const child = parent.querySelector('h1')
parent.removeChild(child)

