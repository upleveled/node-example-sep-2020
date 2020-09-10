// Problem 1: Accessing a property on an undefined variable
let obj;

// Solution 1: Check if the object and property are "truthy"
// if (obj && obj.x) {
//   console.log('found object property', obj.x);
// }

console.log('found object property', obj.x);

// Solution 2: Use optional chaining operator
// console.log('found object property', obj?.x?.y?.z);

// Problem 2: Accessing a property on an undefined parameter
// function main(obj2) {
//   console.log(obj2.y);
// }

// let a;
// main(a);
