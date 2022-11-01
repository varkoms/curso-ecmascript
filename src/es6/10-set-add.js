// ES6: set-add

// Set es una nueva estructura de datos para almacenar elementos únicos, es decir, sin elementos repetidos.

const list = new Set();
list.add('item 1');
list.add('item 1'); // No permite elementos repetidos, no va
list.add('item 2');
list.add('item 3');
list.add('item 4');

console.log(list); // Contenido del set ==> Set(4) { 'item 1', 'item 2', 'item 3', 'item 4' }
console.log(list.size); // Tamanio del set
console.log(list.delete('item 2')); // true
console.log(list); // Contenido del set ==> Set(3) { 'item 1', 'item 3', 'item 4' }
console.log(list.has('item 2')); // Retorna un bool si existe o no el elemento dentro del set ==> False
list.clear(); // Elimina todos los valores dentro del set
console.log(list); // Contenido del set ==> Set(0) {}