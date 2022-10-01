function outer(){
    let privateVariable = 'secret'
    console.log("outer");
    function inner(){
        let variable = 'a'
        console.log('inner func');
        console.log(privateVariable);
    }
    // console.log(variable);
    return inner
    inner()
}
const inner = outer()
console.log(inner);

outer()()

// more examples

function newAccount(name, initialBalance){
    let balance = initialBalance

    function showBalance(){
        console.log(`Hey ${name} your balance is ${balance}`);
    }
    return showBalance
}

newAccount('anu', 500)()

const john = newAccount('john', 200)
const bob = newAccount('bob', 300)

john()
bob()

// some more examples
function newAccount2(name, initialBalance){
    let balance = initialBalance

    function showBalance(){
        console.log(`Hey ${name} your balance is ${balance}`);
    }

    function deposit(amount){
        balance+=amount
        showBalance()
    }
    
    function withdraw(amount){
        if(amount > balance){
            console.log(`hey ${name} your balances is less than ${amount}`);
        }
        balance-=amount
        showBalance()
        
    }
    return {showBalance: showBalance, deposit:deposit, withdraw:withdraw}
}


const john_ = newAccount2('john', 200)
const bob_ = newAccount2('bob', 300)

john_.showBalance()
bob_.showBalance()


john_.withdraw(200)



