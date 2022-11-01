// Asignacion de desestructuracion

// Arrays destructuring
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;

console.log(a, b); // Apple Banana

// Antes
// console.log(fruits[0], fruits[1]); // Apple Banana

// Object destructuring

let user = { username: 'Cesar', age: 34 };
let { username, age } = user;
console.log(username, age);

// Antes
// console.log(user.username, user.age);

// Spread operator
let person = { name: 'Cesar', age: 33 };
let country = 'MX';

let data = { id: 1, ...person, country };
console.log(data);

// Parametros Rest
function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 1, 2, 3);