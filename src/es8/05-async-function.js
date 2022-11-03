// En ECMAScript 2017 o ES8 fue añadida una nueva forma de manejar el asincronismo en JavaScript mediante funciones asíncronas.

// Cómo utilizar funciones asíncronas
// La función asíncrona se crea mediante la palabra reservada async y retorna una promesa.

// La palabra reservada await significa que espera hasta que una promesa sea resuelta y solo funciona dentro de una función asíncrona. Los bloques try / catch sirven para manejar si la promesa ha sido resuelta o rechazada.

const fnAsync = () => {
  return new Promise((resolve, reject) => {
    (true)
      ? setTimeout(() => { resolve('Async!') }, 2000)
      : reject(new Error('Error :('));
  });
}

const anotherFn = async () => {
  const something = await fnAsync();
  console.log(something);
  console.log('Hello there!');
}

console.log('Before');
anotherFn();
console.log('After');


// const calcular = (num1, num2) => {
//   return new Promise((resolve, reject) => {
//     let resultado = num1 + num2;
//     if (resultado > 10) {
//       setTimeout(() => { resolve(`El resultado fue ${resultado} y ${resultado} es mayor a 10`) }, 3000);
//     } else {
//       reject(new Error('La suma no es mayor a 10'));
//     }
//   });
// }

// const suma = async (a, b) => {
//   const resultado = await calcular(a, b);  
//   console.log(resultado);
// }

// console.log('Doing something great. Please wait');
// suma(9, 10);