const result = document.querySelector('#result')
//list items are children of this above node 
console.log(result.childNodes)

//Better way is to use the children

const children = result.children
console.log(children)

console.log(result.firstChild)
console.log(result.lastChild)