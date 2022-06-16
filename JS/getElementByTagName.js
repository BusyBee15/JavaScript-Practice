const headings = document.getElementsByTagName('h2')
//console.log(headings)

headings[0].style.color='red'

console.log(headings.length)

const items = document.getElementsByTagName('h2')

// items.forEach(function(item){
//     console.log(item)
// }) 
// can't use array some (most) methods on node lists


// tranforming node list
const betterItems = [...items]
console.log(betterItems)
betterItems.forEach(function(item){
    console.log(item)
})