// Las siguientes características de ES2020 o ES11 que aprenderás son: nuevo tipo de dato bigint y operador Nullish Coalescing(??).

// Big Int, enteros muy grandes
// El nuevo dato primitivo bigint permite manejar números enteros muy grandes.Existen dos formas de crear un bigint: el número entero seguido de n o mediante la función BigInt

const number1 = 45n
const number2 = BigInt(45)

console.log(number1); // 45n
console.log(number2); // 45n
console.log(typeof 45n); // Imprime 'bigint'

// JavaScript tiene límites numéricos, un máximo Number.MAX_SAFE_INTEGER y un mínimo Number.MIN_SAFE_INTEGER.

const max = Number.MAX_SAFE_INTEGER
const min = Number.MIN_SAFE_INTEGER

console.log(max)  // 9007199254740991
console.log(min) // -9007199254740991

// Después de los límites, los cálculos muestran resultados erróneos. Los bigint ayudan a manejar operaciones de enteros fuera de los límites mencionados.

const increment = 2
const number = Number.MAX_SAFE_INTEGER + increment
const bigInt = BigInt(Number.MAX_SAFE_INTEGER) + BigInt(increment)

console.log(number) // 9007199254740992
console.log(bigInt) // 9007199254740993n

// Se añade la misma cantidad a ambos tipos de datos, sin embargo, el tipo numérico da un resultado diferente al esperado.

// Ejemplo de clase
const aBigNumber = 8987245920742893847n;
const anotherBigNumber = BigInt(8987245920742893847);

console.log(aBigNumber);
console.log(anotherBigNumber);