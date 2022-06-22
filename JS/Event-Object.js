const heading = document.querySelector('#EO-h1')
// const btn = document.querySelector('.EO-btn')
const link = document.querySelector('#EO-link')
// const btn2 = document.querySelector('.EO-btn2')
const buttons = document.querySelectorAll('.EO-btn')

heading.addEventListener('click', function(event){
    // heading.classList.add('colors')
    console.log(event.currentTarget)
    console.log(event.type)
    console.log(this)
})


buttons.forEach(function(btn){
    btn.addEventListener('click',function(event){
        console.log('current target',event.currentTarget)
        console.log('target', event.target)
    })
})
// heading.addEventListener('click', (event)=>{
//     console.log(this)
// })

// link.addEventListener('click', function(event){
//    event.preventDefault()
// })


// target versus current target
// btn.addEventListener('click', function(event){
//     console.log('current target',event.currentTarget)
//     console.log('target', event.target)
// })

// btn2.addEventListener('click', function(event){
//     console.log('current target',event.currentTarget)
//      console.log('target', event.target)
// })


