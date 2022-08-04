const person = {
    _name:'john'
}
person.age = 25

const items = {
    'featured-items': [
      'item1', 'item2'
    ]
}
console.log(items["featured-items"])

let appstate = 'loading'

let app = {
    [appstate]:true
}

const state = {
    loading:true,
    _name:"",
    job:""
}

function updateState(key, value){
    state[key]=value
}

updateState('_name', 'john')