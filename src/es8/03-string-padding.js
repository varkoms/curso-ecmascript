// Las siguientes características de ES8 o ES2017 que aprenderás son: rellenar un string y trailing commas.

// Rellenar un string o padding
// El padding consiste en rellenar un string por el principio o por el final, con el carácter especificado, repetido hasta que complete la longitud máxima.

// Este método recibe dos argumentos:

// La longitud máxima a rellenar, incluyendo el string inicial.
// El string para rellenar, por defecto, es un espacio.
// Si la longitud a rellenar es menor que la longitud del string actual, entonces no agregará nada.

// Método padStart
// El método padStart completa un string con otro string en el inicio hasta tener un total de caracteres especificado.

const string = 'Hello';
console.log(string.padStart(10, '_'));

// Método padEnd
// El método padEnd completa un string con otro string en el final hasta tener un total de caracteres especificado.

console.log(string.padEnd(10, '_'));