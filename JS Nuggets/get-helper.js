const getElement = (selector, isList) => {
    // if(isList){
    //     const el = [...document.querySelectorAll(selector)]
    //     if(el.length < 1) {
    //         throw new Error(`Please double check selector ${selector}`)
    //     }
    //     else return el
    // }



    // const el = document.querySelector(selector)
    // if(el)  return el
    const el = isList
    ?[...document.querySelectorAll(selector)]
    :document.querySelector(selector)

    // if(!isList && el) return el
    // if(isList && !el.length < 1) return el

    if((!isList && el) || (isList && !el.length < 1)) return el
    throw new Error(`Please double check selector ${selector}`)  
}