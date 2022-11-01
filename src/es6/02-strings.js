// Template literals
// Permiten concatenar strings de una manera mas amigable
// Permiten imprimir variables de una mejor manera

let hello = 'Hello';
let world = 'World';

// Antes de ES6
// Mas tedioso :(
let epicPhrase = hello + ' ' + world + '!';
console.log(epicPhrase);

// Con Template Literals
let epicPhrase2 = `${hello} ${world}!`;

console.log(epicPhrase2);

// Multi-line Strings

// Forma anterior a ES6 aburrida
let lorem = 'esto es un string \n' + 'esto es otra lineas';

// Con ES6
let lorem2 = `Esta es una frase epica.
Aqui continua la frase mas epica!
`;

console.log(lorem);
console.log(lorem2);