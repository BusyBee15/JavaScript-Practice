// Array.of


const example = ['one', 'two', 'three']

const friends = Array.of('john',2,true)
console.log(friends);


// Array.from
// string
const udemy ='udemy'
console.log(Array.from(udemy));

// arguments object
function countTotal(){
    console.log(arguments);
    console.log(Array.from(arguments));
}
countTotal(1,2,3,4,5,6)


// nodelist
// const p = document.querySelectorAll(".arrmeth p")
// const result = document.querySelector('.arrmeth #result')
// const second = document.querySelector('.arrmeth #second')

// console.log(p);

// let newText = Array.from(p)

// newText = newText.map((item)=>`<span>${item.textContent}</span>`).join('')

// result.innerHTML = newText

// const text = Array.from(document.querySelectorAll(".arrmeth p"), (item)=>{
//    return `<span>${item.textContent}</span>`
// }).join('')
// console.log(text);

// more array methods
const people = [
    {id:1, name:'anu'},
    {id:2, name:'john'},
    {id:3, name:'anna'},
    {id:4, name:'anna'},
    

]

const anna = people.filter(person=>person.name==='anna')
// find
const anna2 = people.find(person=>person.name==='anna')
console.log(anna);
console.log(anna2);

// findIndex
const id = people.findIndex(item=>item.id==3)
console.log(id);

// every
const grades = ['A', 'B', 'C', 'A', 'B']
console.log(grades.every(grade=>grade!=='C'));
// some
console.log(grades.some(grade=>grade==='C'));