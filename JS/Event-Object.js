const heading = document.querySelector('#EO-h1')
const btn = document.querySelector('.EO-btn')
const link = document.querySelector('#EO-link')

heading.addEventListener('click', function(event){
    // heading.classList.add('colors')
    console.log(event.currentTarget)
    console.log(event.type)
    console.log(this)
})

// heading.addEventListener('click', (event)=>{
//     console.log(this)
// })

link.addEventListener('click', function(event){
   event.preventDefault()
})

