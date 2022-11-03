// Las siguientes características de ES10 o ES2019 que aprenderás son: parámetro opcional de catch y un método para tranformar arrays a objetos

try {
  hello();
} catch (error) {
  console.log(error); // ReferenceError: hello is not defined
}

// Parámetro opcional de catch
// El parámetro opcional de catch permite omitir el error si es necesario.

  try {
  // Manejar el código
  anotherFn();
} catch {
  console.log('This is an error');
}