const btn = document.querySelector('.btn')
// console.log(btn)
const heading = document.querySelector('.events-h2')

btn.addEventListener('click', function(){
   console.log('you clicked me')
})

btn.addEventListener('mousedown', function(){
   console.log('mousedown')
})

btn.addEventListener('mouseup', function(){
   console.log('mouseup')
})

btn.addEventListener('mouseenter', function(){
   console.log('mouseenter')
})

btn.addEventListener('mouseleave', function(){
   console.log('mouseleave')
})