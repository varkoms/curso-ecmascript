// Los generadores son funciones especiales que pueden pausar su ejecución, luego volver al punto donde se quedaron, recordando su scope y seguir retornando valores.
// Estos se utilizan para guardar la totalidad de datos infinitos, a través de una función matemática a valores futuros.De esta manera ocupan poca memoria, con respecto a si creamos un array u objeto.

function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(['Cesar', 'David', 'Ana', 'Oscar', 'Ulises', 'Jennifer']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);