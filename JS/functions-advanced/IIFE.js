const num1 = 30
const num2 = 30


function add(){
    console.log(`result is ${num1 + num2}`);
}
add()

(function(){
 const num11 = 30
 const num21 = 30
 
 console.log(`result is ${num11 + num21}`);

})()

const res = (function(){
 const num11 = 30
 const num21 = 30
 
 return num11 + num21

})()
console.log(res);