// program to convert an object to a string

const person = {
    name: 'Jack',
    age: 28
}

const result1 = String(person);
const result2 = String(person['name']);

console.log(result1);
console.log(result2);

console.log(typeof result1);