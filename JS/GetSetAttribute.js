const firstList = document.querySelectorAll('.GetSet-first')
console.log(firstList)

const first = document.querySelector('.GetSet-first')
const classAttrVal = first.getAttribute('class')
console.log(classAttrVal)

const link = document.querySelector('#link')
console.log(link.getAttribute('id'))

// let's make things interesting and let's dynamically add attributes
// also traverse using link

const last = link.nextElementSibling
last.setAttribute('class','GetSet-first')
last.textContent = 'I also have attributes'
console.log(last.getAttribute('class'))
console.log(firstList.length)

const firstList2 = document.querySelectorAll('.GetSet-first')
console.log(firstList2.length)