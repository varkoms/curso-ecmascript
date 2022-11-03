// Cómo transformar un array de arrays en un objeto
// El método Object.fromEntries devuelve un objeto a partir de un array donde sus elementos son las entries en forma [propiedad, valor].

// Se considera la operación inversa de Object.entries().

const arrayEntries = [
  ['name', 'Andres'],
  ['email', 'andres@correo.com'],
  ['age', 23]
]

const usuario = Object.fromEntries(arrayEntries)

console.log(usuario)
/* {
  name: 'Andres',
  email: 'andres@correo.com',
  age: 23
}
*/

// Ejemplo de la clase
const entries = new Map([["name", "Cesar"], ["age", 33]]);
console.log(entries); // Map(2) { 'name' => 'Cesar', 'age' => 33 }

// Ahora...
console.log(Object.fromEntries(entries)); // { name: 'Cesar', age: 33 }