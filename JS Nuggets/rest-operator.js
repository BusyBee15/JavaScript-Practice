//arrays

const fruits = ['apple', 'orange', 'lemon', 'banana']
// const [fruit,...rest] = [fruits]

const [a,,b,...rest] = fruits
console.log(a,b,rest)

//we can also use array methods with rest, since it is an array
const specificFruit = rest.find((fruit) => fruit==='lemon')

//object
const person = {_name:'john', lastName:'smith', job:'developer'}
const {_name,...restOfTheProps} = person
console.log(_name)

//functions
const getAverage = (_name, ...scores) => {
    console.log(_name)
    console.log(scores);
    const average = scores.reduce((total,item)=>{
        return total += item
    }, 0)/scores.length
    console.log(average)
}

// getAverage('anu', 20, 30, 40)
const testScores = [25,34,45,30]
getAverage('anu',...testScores)