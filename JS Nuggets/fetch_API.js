// import fetch from "node-fetch";


const url = "https://www.course-api.com/react-tours-project"

// console.log(fetch(url))
// console.log(window.fetch)

// fetch(url).then((response)=>{
//     console.log('got the response')
//     response.json().then((result)=>{
//         console.log(result)
//     })}).catch((err)=>console.log('check your url'))

//async await
const getData = async () => {
   try{
     const response = await fetch(url)
     const data = await response.json()
     console.log(data)
   }catch(err){
     console.log(err)
   }
}

getData()