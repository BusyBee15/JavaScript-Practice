// // regular function
// function func(){

// }

// // function expression
// const hello = function(name){
//     console.log(`hi ${name}`);
// }
// hello('anu')

// // arrow function
// const double = value => value*2
// const num = double(2)

// // One line - you can omit curly braces and hence the return 

// // If braces is there - it is no longer implicit return - must use return statement 


// // return objetc
// const object = () => { return {name:'john'}}
// console.log(object())

// // arrow functions as callback fucntions 
// const numbers = [1,2,3,4,5,6]
// const big = numbers.filter(number => number>2)
// console.log(big);

const btn = document.querySelector('.arrow')
// console.log(btn);


// Object and "this"
// // obj with regular function
// const bob = {
    //     name:"bob",
    //     sayName: function(){
        //         console.log(this);
        //     }
// }

// // obj with arrow function
// const john = {
    //     name:"john",
    //     sayName: function(){
//         console.log(this);
//     }
// }

// bob.sayName()
// john.sayName()


// obj with regular function
// const bob = {
    //     name:"bob",
    //     sayName: function(){
        //         console.log(this);
        //         setTimeout(function(){
//             console.log(this.name);
//         })
//     }
// }
   
// obj with arrow function
// const john = {
//     name:"john",
//     sayName: function(){
//         console.log(this);
//         setTimeout(()=>{
//             console.log(this.name);
//         })
//     }
// }

// bob.sayName()
// john.sayName()

btn.addEventListener('click', function(){
    console.log(this);
    setTimeout(()=>{
        console.log(this);
        this.style.color = 'red'
    })
})
// btn.addEventListener('click', ()=>{
//     console.log(this);
//     // this.style.color = 'red'
// })


// default parameters
function hi(name="ABC"){
console.log(name);
}
hi()
hi("anu")

const hiA= (name="ABC")=>{
   console.log(name);
}
hiA()
hiA("anu")