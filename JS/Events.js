const btn = document.querySelector('.btn')
// console.log(btn)
const heading = document.querySelector('.events-h2')

// function cb(){
//     heading.classList.add('colors')
// }
// juts pass the above function reference as 2nd parameter to the event listener

// btn.addEventListener('click', function(){
//     // console.log('hey you clicked me') - ok cb working fine
//     //Set up the functionality
//     heading.classList.add('colors')
// })

function cb(){
    let hasClass = heading.classList.contains('colors')
    if(hasClass){
        heading.classList.remove('colors')
    }else{
        heading.classList.add('colors')
    }
}

btn.addEventListener('click',cb)


