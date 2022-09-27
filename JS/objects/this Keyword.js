const john = {
    firstName:'john',
    lastName:'anderson',
    fullName:function(){
        console.log(`full name is ${this.firstName} ${this.lastName}`);
    }
}

const bob = {
    firstName:'bob',
    lastName:'sanders',
    fullName:function(){
        console.log(`full name is ${this.firstName} ${this.lastName}`);
    }
}

// bob.fullName()
// john.fullName()


function showThis(){
    console.log(this)
}

const anu = {
    name:'anu',
    showThis:showThis
}

const chetan = {
    name:'chetan',
    showThis:showThis
}

// anu.showThis()
// chetan.showThis()

showThis()

