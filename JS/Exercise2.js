// end of the month, you have certain categories where you have receipts
// create a function that iterates over the arrays and spits back what is the total

const gas = [20,40,60]
const food = [10,40,50]

function calculateTotal(arr){
    let total = 0;
    for(let i=0; i<arr.length; i++){
        total =  total + arr[i];
    }
    return total;
}

console.log(calculateTotal(gas))
console.log(calculateTotal(food))