const xhr = new XMLHttpRequest()
console.log(xhr);

xhr.open('GET', './myText.txt')
xhr.onreadystatechange = function(){
    
    if(xhr.readyState===4 && xhr.status===200){
       console.log(xhr.responseText)
       const text = document.createElement('p')
       text.textContent = xhr.responseText
       document.body.appendChild(text)
       

    }else{
        console.log({
            status:xhr.status,
            statusText:xhr.statusText
        });
    }
}
xhr.send()

console.log("hello");
// fetch("./myText.txt").then((data)=>console.log(data)).catch((err)=>console.log(err))