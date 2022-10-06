// dom elements
// const list = document.querySelectorAll('.a')
// console.log(list);

// const array = [...list]
// console.log(array);

// const result = array.map((item)=>item.textContent)
// console.log(result);

// const result = [...list].map(item => item.textContent).join("")
// console.log(typeof result);


// fucntion arguments
console.log(Math.max(4,5,6,7));

const arr = [1,2,4,2,4,5]
// doesn't work
console.log(Math.max(arr));

// works
console.log(Math.max(...arr));

// functions 

const name = ['anu', 'hp']
const sayHello = (fname, lname)=>{
    console.log(`Hello ${fname} ${lname}`);
}

sayHello(...name)