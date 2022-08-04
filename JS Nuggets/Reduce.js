const people = [
    {_name:'bob', age:20, position:'developer', salary: 100},
    {_name:'peter', age:25, position:'designer', salary: 200},
    {_name:'susy', age:30, position:'boss', salary: 400},
    {_name:'anna', age:35, position:'intern', salary: 10},
];

const dailyTotal = people.reduce((total,person)=>{
    total += person.salary
    return total
}, 0)

//examples
// cart example
const cart = [
    {
        title: 'Samsung galaxy s7',
        price: 599.99,
        amount: 1 
    },
    {
        title: 'Google pixel',
        price: 499.99,
        amount: 2 
    },
    {
        title: 'Vivo s1 pro',
        price: 399.99,
        amount: 3
    }
    
]

let {totalItems, cartTotal} = cart.reduce((acc, cartItem)=>{
    const {amount, price} = cartItem
    acc.totalItems += amount
    acc.cartTotal += amount * price
    return acc
},{
    totalItems:0,
    cartTotal:0
})

cartTotal = parseFloat(cartTotal.toFixed(1))

console.log(totalItems, cartTotal)


//github example

const url = "https://api.github.com/users/john-smilga/repos?per_page=100"

const fetchRepos = async () => {
    const response = await fetch(url)
    const data = await response.json()
    const newData = data.reduce((total,repo)=>{
          const {language} = repo;
        if(language){
            // if(total[language]){
            //    total[language] = total[language] + 1
            // }
            // else total[language] = 1 
             total[language] = total[language] + 1 || 1 
        }
          
          return total
    },{})
    console.log(newData)
}
fetchRepos()
