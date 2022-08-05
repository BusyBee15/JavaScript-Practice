const udemy = 'udemy'
const letters = [...udemy]
console.log(letters)

const boys = ['john', 'peter', 'bob']
const girls = ['susan', 'anna']

const friends = [...boys, ...girls, bestfriend]

const bestfriend = 'chetan'


//reference 
// const newfriends = friends
// newfriends[0] = 'anu'

const newfriends = [...friends]

//object
const person = {_name:'john', job:'developer'}
const newPerson = {...person, city:'chicago', _name:'anu'}