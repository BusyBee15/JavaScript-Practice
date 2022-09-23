function sayHello() {
   console.log("hello")
}
sayHello()

setTimeout(sayHello, 2000)

setTimeout(function(){
    console.log("hello anu")
},2000)

function showScore(name, score){
    console.log(`Name :${name}, Score :${score}`)
}
setTimeout(showScore, 2000, "anu", 95)

const firstID = setTimeout(showScore, 5000, "anu", 95)
console.log(firstID)

clearTimeout(firstID)
console.log("cleared timeout")

// const ID = setInterval(showScore, 1000, "anu", 95)