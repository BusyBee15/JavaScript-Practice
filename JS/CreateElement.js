//createElement + createTextNode + appendChild + insertBefore + replaceChild

const result = document.querySelector('.createEl-div')
// console.log(result.children)


// Adding a dynamic element to body
//create empty element
const bodydiv = document.createElement('div')
//create text node
const text = document.createTextNode('a simple dynamic body div')
bodydiv.appendChild(text)
document.body.appendChild(bodydiv)

//now add the dynamic element to result (the node that is been selected in the first line of this file)
const resDynamic = document.createElement('p')
const textNode = document.createTextNode('Dynamic paragraph appended to createEl-div')
resDynamic.appendChild(textNode)
resDynamic.classList.add('blue')
result.appendChild(resDynamic)

// console.log(result.children)
// console.log(result.childNodes)

const lastEg = document.createElement('h2')
const text2 = document.createTextNode('Dynamic heading before createEl-div')
lastEg.appendChild(text2)
document.body.insertBefore(lastEg, result)

// console.log(result.children)

// document.body.replaceChild(resDynamic, lastEg)
document.body.replaceChild(lastEg, bodydiv)

