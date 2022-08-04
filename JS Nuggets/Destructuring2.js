const bob = {
    first: 'bob',
    last:'sanders',
    city:'chicago',
    siblings:{
        sister:'jane',
    },
};

// const firstname = bob.first;
// const lastname = bob.last;
// const sister = bob.siblings.sister;

const {first:firstname, last, city, siblings:{sister}} = bob

// function printPerson(person){
//   const {first,last} = person
//   console.log(first, last)
// }
function printPerson({first,last}){
   console.log(first, last)
}

printPerson(bob)

