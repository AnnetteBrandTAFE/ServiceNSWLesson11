//Make a dereferenced copy of the array below. 
//(Hint: You will need to dereference each object in the array, not just the array itself)

let myPeople = [
    {
        firstName: "Luke",
        lastName: "Parker",
        age: 23
    }, {
        firstName: "Rachel",
        lastName: "Nox",
        age: 28
    }, {
        firstName: "Douglas",
        lastName: "Adams",
        age: 42
    }
];
let myArrCopy = myPeople.map(num => num);
myArrCopy.push(Annette);
console.log(myPeople);
console.log(myArrCopy);