const value = 2

const promise = new Promise((resolve, reject)=>{
    const random = Math.floor(Math.random() * 3)
    if(value == random){
        resolve('your guess is correct')
    }else reject('wrong number')
})
// console.log(promise)

promise.then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})


const btn = document.querySelector('.btn')

btn.addEventListener('click', ()=>{
    addColor(1000,'.first', 'red')
   .then(()=>{
        addColor(3000, '.secon', 'green')     
   })
   .then(()=>{
        addColor(2000, '.third', 'purple')
   })
   .then(()=>{
        console.log("all promises fulfilled")
   })
   .catch((err)=>{
        console.log(err)
   })

})
// btn.addEventListener('click', ()=>{
//    addColor(1000,'.first', 'red')
//    .then(()=>{
//         addColor(3000, '.secon', 'green')
//         .then(()=>{
//             addColor(2000, '.thir', 'purple')
//             .then(()=>{
//                 console.log("all promised fulfilled")
//             })
//             // .catch((err)=>{
//             // console.log(err)
//             // })    
//         })
//         // .catch((err)=>{
//         //     console.log(err)
//         // })
//    })
//    .catch((err)=>{
//     console.log(err)
//    })
// })

function addColor(time, selector, color){
    const element = document.querySelector(selector)
    return new Promise((resolve, reject)=>{
        if(element){
            setTimeout(()=>{
            element.style.color = color
            resolve()
        },time)
        }else{
            reject("wrong selector")
        }
    })
}