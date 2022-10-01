class Account{
    constructor(name, initialBalance){
        this.name = name
        this.balance = initialBalance
    }

    bank = 'CHASE'

    deposit(amount){
        this.balance += amount
        console.log(`${this.name} balance is ${this.balance}`);
    }
}

const john = new Account('john', 200)
console.log(john);
john.bank = 'SBI'
john.deposit(200)