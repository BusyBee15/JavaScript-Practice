const parent = document.querySelector('.ED-parent')

function random(){
   // how to select a random number between 0 to 255
  
   return Math.floor(Math.random()*255)
}

function changeColor(event){
    // console.log(randomColor())
   event.target.style.backgroundColor = `rgb(${random()},${random()},${random()})`
}

parent.addEventListener('click', changeColor)