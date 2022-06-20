//InnerHTML + TextContent

const list = document.getElementById('inner-first')
const div = document.querySelector('.inner-div')
const item = document.querySelector('.item')

console.log(list.innerHTML)

const v = "random thing"
const ul = document.createElement('ul')
ul.innerHTML = `<li class="item">${v}</li>
      <li>list item</li> <li>list item</li> `
div.appendChild(ul)

div.textContent = "This is different content than what was there in html"
// div.innerHTML = "This is different content than what was there in html"