
const globalNum = 2;

function add(num1, num2){
    const val = num1 + num2 + globalNum;

    function multiply(){
        const res = val*globalNum;
        console.log(res)
    }
    multiply()
    return val;
}

console.log(add(2,3))