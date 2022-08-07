console.log(new Date())

console.log(Date.now())
console.log(new Date().getTime())
console.log(new Date().valueOf())

setTimeout(()=>{
    console.log(Date.now())
},1000)

console.log(new Date(1659845211347))

const now = Date.now()
const futureDate = new Date(now + 1000*60)
console.log(new Date(), futureDate)