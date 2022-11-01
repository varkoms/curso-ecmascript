// ES7 - Array Includes

// Método includes
// El método includes determina si un array o string incluye un determinado elemento.Devuelve true o false, si existe o no respectivamente.

// Este método recibe dos argumentos:

// El elemento a comparar.
// El índice inicial desde donde comparar hasta el último elemento.

let numbers = [1, 3, 4, 6, 7, 8, 10];

// Queremos preguntar si un numero existe dentro del array
console.log(numbers.includes(0)); // Retorna false
console.log(numbers.includes(1)); // Retorna true

// // Ahora con Strings
let nombres = ['Oscar', 'David', 'Ana']
console.log(nombres.includes('David')); // Retorna true
console.log(nombres.includes('david')); // Retorna false

// // Ejemplos utilizando el metodo includes
const saludo = 'Hola mundo';

console.log(saludo.includes('Hola'))       // true
console.log(saludo.includes('Mundo'))      // false
console.log(saludo.includes(' '))          // true
console.log(saludo.includes('Hola', 1))    // false
console.log(saludo.includes('mundo', -5))  // true

// Utilizando arrays
const fruits = ['manzana', 'pera', 'piña', 'uva'];
console.log(fruits.includes("manzana"));        // true
console.log(fruits.includes("Pera"));           // false
console.log(fruits.includes("sandia"));         // false
console.log(fruits.includes("manzana", 1));     // false
console.log(fruits.includes("piña", -1));       // false
console.log(fruits[0].includes("man"));         // true