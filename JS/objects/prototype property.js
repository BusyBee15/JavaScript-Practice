function Account(name, initialBalance){
    this.name = name
    this.balance = initialBalance
   
}

Account.prototype.bank = 'CHASE'
Account.prototype.deposit = function(amount){
    this.balance += amount
    console.log(`${this.name} balance is ${this.balance}`);
}

const anu = new Account('Anu', 200)
const bob = new Account('Bob', 0)

console.log(bob);
console.log(Account.prototype);

//property lookup
console.log([]);
console.log({});