// La expresión import() permite manejar módulos dinámicamente, ya que la sintaxis de ECMAScript import ... from ... no lo permite.

// Cómo utilizar importación dinámica
// La importación dinámica consiste en cargar los módulos cuando el usuario los vaya a utilizar, y no al iniciar la aplicación.Esto permite que la página web sea más rápida, porque descarga menos recursos.

// La expresión import() recibe un argumento de tipo string con la ruta del módulo a importar y devuelve una promesa.

// const ruta = "./module.js"

// // Utilizando promesas
// import(ruta)
//   .then(modulo => {
//     modulo.funcion1()
//     modulo.funcion2()
//   })
//   .catch(error => console.log(error))

// // Utilizando async/await
// async function importarModulo(rutaDelModulo) {
//   const modulo = await import(rutaDelModulo)
//   modulo.funcion1()
//   modulo.funcion2()
// }

// importarModulo(ruta)

// Ejemplo utilizando importación dinámica
// De esta manera puedes utilizar una importación dinámica en tu aplicación para desencadenar una descarga de un módulo cuando el usuario lo vaya a utilizar.Por ejemplo, al realizar clic en un botón.

const button = document.getElementById("btn")

button.addEventListener("click", async function () {
  const module = await import('./module.js')
  module.hello()
})