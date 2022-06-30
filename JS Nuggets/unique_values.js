const menu = [
    {
        name_:'pancake',
        category: 'breakfast'
    },
    {
        name_:'burger',
        category: 'lunch'
    },
    {
        name_:'steak',
        category: 'dinner'
    },
    {
        name_:'bacon',
        category: 'breakfast'
    },
    {
        name_:'eggs',
        category: 'breakfast'
    },
    {
        name_:'pasta',
        category: 'breakfast'
    },
    
]


const categories = ['all', ...new Set(menu.map((item)=>{
    return item.category
}))]
// console.log(categories)

const result = document.querySelector('.result')
result.innerHTML = categories.map((category)=>{
    return `<button>${category}</button>`
}).join(" ")

// console.log(categories.map((category)=>{
//     return `<button>${category}</button>`
// }).join(" "))

// console.log(categories.map((category)=>{
//     return `<button>${category}</button>`
// }))
