// Parametros por defecto

// Antes de ES6
function newUser(name, age, country) {
  var name = name || "Cesar";
  var age = age || 33;
  var country = country || "MX";
  console.log(name, age, country);
}

newUser();
newUser('Oscar', 34, 'CO');

// Con ES6
function newAdmin(name = "Cesar", age = 33, country = 'MX') {
  console.log(name, age, country);
}

newAdmin();
newAdmin('Ana', 28, 'PE');

// Posicion de los parametros por defecto
// Si obligatoriamente necesitas el valor como argumento, ten presente que los
// parametros por defecto siempre deben de estar en las ultimnas posiciones

// FORMA CORRECTA
function sumar(number1, number2 = 0) {
  // number1 = 3, number2 = 0
  return number1 + number2;
}
console.log(sumar(3));
console.log(sumar(3,10));

// X FORMA INCORRECTA
function sumar(number1 = 0, number2) {
  // number1 = 3, number2 = undefined
  return number1 + number2;
}
console.log(sumar(3)); // NaN
console.log(sumar(3,2)); // NaN