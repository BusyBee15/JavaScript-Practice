const url = "https://www.course-api.com/react-tours-project"

const btn = document.querySelector('.btn2')
console.log(btn)

const getData = async () => {
   try{
     const response = await fetch(url)
    //  console.log(response)
    //  const data = await response.json()
    if(!response.ok){
        const msg = `There was an error "${response.status} ${response.statusText}"`
        throw new Error(msg)
    }
    const data = await response.json()
     console.log(data)
   }catch(err){
     console.log(err)
   }
}

btn.addEventListener('click', getData)

