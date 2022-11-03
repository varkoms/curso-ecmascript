// NOTA PERSONAL: LOS ERRORES EN EL ARCHIVO SE DEBEN A QUE SE INTENTA REASIGNAR EL CONTENIDO DE LA CONSTANTE array
// PERO ESTO ES SOLO PARA FINES DEMOSTRATIVOS, YA QUE SE ESTA USANDO LA EXTENSION "Code Runner" PARA EJECUTAR PIEZAS
// DE CODIGO DE MANERA INDEPENDIENTE Y NO COMO UN TODO.

// La siguiente versión de ECMAScript fue publicada en 2019. A continuación aprenderás sobre aplanamiento de arrays y eliminar espacios en blanco de un string.

// Qué es el aplanamiento de arrays
// El aplanamiento consiste en transformar un array de arrays a una sola dimensión.Los métodos flat y flatMap permitirán realizar el aplanamiento.

// Método flat
// El método flat devuelve un array donde los sub - arrays han sido propagados hasta una profundidad especificada.

// Este método es inmutable, es decir, retorna un nuevo array con los cambios y no cambia el array original.

// Este método recibe un argumento:

// La profundidad del aplanamiento, por defecto, tiene un valor de 1.
// Si se desea aplanar todos los sub - arrays en una sola dimensión, utiliza el valor de Infinity.

const array = [1, 1, 2, 3, 4, [1, 3, 5, 6, [1, 2, 4]]];
console.log(array.flat(3));
// Imprime
// [
//   1, 1, 2, 3, 4,
//   1, 3, 5, 6, 1,
//   2, 4
// ]

// Otros ejemplos
const array = [1, 2, [3, 4], 5, 6]
const result = array.flat()
console.log(result); // Imprime [1,2,3,4,5,6]

const array = [1, 2, [3, 4, [5, 6]]];
const result = array.flat()
console.log(result); // Imprime [ 1, 2, 3, 4, [ 5, 6 ] ]

const array = [1, 2, [3, 4, [5, 6]]]
const result = array.flat(2)
console.log(result); // Imprime [ 1, 2, 3, 4, 5, 6 ]

const array = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const result = array.flat(Infinity)
console.log(result); // Imprime [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Método flatMap
// El método flatMap es una combinación de los métodos map y flat.Primero realiza la iteración de los elementos del array(como si fuera map), y después los aplana en una sola profundidad(como si fuera flat).

// Este método es inmutable, es decir, retorna un nuevo array con los cambios y no cambia el array original.

// Este método recibe los mismos argumentos que el método map.

const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(v => [v, v * 2]));

// Imprime [ 1, 2, 2, 4, 3, 6, 4, 8, 5, 10 ]

// Mas ejemplos

const strings = ["Nunca pares", "de Aprender"]
console.log(strings.map(string => string.split(" "))); // Imprime [ [ 'Nunca', 'pares' ], [ 'de', 'Aprender' ] ]
console.log(strings.flatMap(string => string.split(" "))); // Imprime [ 'Nunca', 'pares', 'de', 'Aprender' ]

const numbers = [1, 2, 3, 4]
console.log(numbers.map(number => [number * 2])); // Imprime [ [ 2 ], [ 4 ], [ 6 ], [ 8 ] ]
console.log(numbers.flatMap(number => [number * 2])); // Imprime [ 2, 4, 6, 8 ]

// Cuidado, primero hace el map y luego el flat
const numbers2 = [1, [2, 3], 4, 5]
console.log(numbers2.flatMap(number => [number * 2])); // Imprime [ 2, NaN, 8, 10 ]
// * Recuerda: NaN = Not a Number

// Forma de resolver el problema anterior
// console.log(numbers2.flat().map(number => number * 2)); // Prints [ 2, 4, 6, 8, 10 ]