// for each name in the array names, add the lastname shakeandbake
// create a new aray and store the result in that

const names = ['anna', 'susy', 'bob']
const lastName = 'shakeandbake'

//new array
const res = [];

//for loop
for(let i=0; i<names.length; i++){
    // add each name to res
    // se template literal to concatenate two strings

    //you can also set up a separate variable that concatenates first then push that value to the result array - extra line of code 
     res.push(`${names[i]} ${lastName}`)
}

console.log(res)