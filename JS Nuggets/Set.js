const unique = new Set()

//methods 
unique.add('first')
unique.add('first')
unique.add('first')
unique.add(4)
unique.add('second')

const value = 'abc'
unique.add(value)

const res = unique.delete('first')

const result1 = unique.hasValue(4)


//example 
const products = [
    {
        company:'ikea'
    },
    {
        company:'abc'
    },
    {
        company:'ikea'
    }
]

// const companies = products.map((item)=> item.company)

// const uniqueCompanies = new Set(companies)

// const result = [...uniqueCompanies]

const result = ['all', ...new Set(products.map(function(item){
    return item.company
}))]