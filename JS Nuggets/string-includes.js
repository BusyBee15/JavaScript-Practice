const _name = 'anu'
console.log(_name.includes('an'))

const products = [
   {title:'modern poster'},
   {title:'bar stool'},
   {title:'armchair'},
   {title:'leather chair'}
]

const text = 'ad'

const filteredProducts = products.filter((product)=>{
    product.title.toLowerCase().includes(text)
})