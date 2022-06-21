const nameInput = document.querySelector('.KE-input')

nameInput.addEventListener('keypress', function(){
    console.log('you pressed a key')
})

// with keyo up - let's make things interesting by grabbing the value
nameInput.addEventListener('keyup', function(){
    console.log('key up')
    console.log(nameInput.value)

})

nameInput.addEventListener('keydown', function(){
    console.log('key down')
})






