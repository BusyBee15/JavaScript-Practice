const example = async()=>{
    return 'hello world'
}
console.log(example())

async function someFunc() {
    const result = await example()
    console.log(result)
    console.log('hello there')
}
someFunc()

const users = [
    {id:1, name:'john'},
    {id:2, name:'anu'},
    {id:3, name:'bobby'}
]

const articles = [
    // {userId:1, articles:['one','two','three']},
    {userId:2, articles:['one','two']},
    {userId:3, articles:['one','four']},
]

function getUser(name) {
    return new Promise((resolve, reject)=>{
        const user = users.find((user)=>user.name===name)
        if(user) return resolve(user)
        else reject(`No such user with the name ${name}`)
    })
}

function getArticles(Id) {
    return new Promise((resolve,reject)=>{
        // console.log(articles)
        const userArticles = articles.find((user)=>user.userId==Id)
        // console.log(userArticles)
        // console.log(userArticles.articles)
        if(userArticles) resolve(userArticles.articles)
        else reject(`Wrong ID ${Id}`)
    })
}

//now consuming the promise using .then and .catch

// getUser('john').then((user)=>{
//     console.log(user)
//     getArticles(user.id).then((articles)=>{
//     console.log(articles)
// })}).catch((err)=>{console.log(err)})

const getData = async (name) => {
    try{
        const user = await getUser(name)
        const articles_ = await getArticles(user.id)
        // console.log(user.id)
        // if(user){
        //    const articles_ = await getArticles(user.id)
        console.log(articles_)
        // }
    }catch(error){
       console.log(error)
    }
}

getData('john')

// console.log(articles.find((user)=>user.userId==1))