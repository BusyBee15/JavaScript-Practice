import { people } from "./data.js"
import showdata from "./callback.js"

const container = document.querySelector('.modules .content')
const btn = document.querySelector('.modules button')


btn.addEventListener('click', ()=>{
    container.innerHTML = showdata(people)
})