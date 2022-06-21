const btn = document.querySelector('.btn')
// console.log(btn)
const heading = document.querySelector('.events-h2')

btn.addEventListener('click', function(){
    // console.log('hey you clicked me') - ok cb working fine
    //Set up the functionality
    heading.classList.add('colors')
})