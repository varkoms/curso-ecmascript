/**
 * Uso de VAR
 *    Uso global
 *    Function scope
 *    Puede ser reasignada
 *    Puede ser redeclarada
 *    Puede ser hoisted
 */

// Declarando y asignando una variable
var lastName = 'David';

// Reasignando una variable
lastName = 'Cesar';
console.log(lastName); // 'Cesar'

/**
 * Uso de LET
 *    No se usa en el scope global, solo local
 *    Function scope
 *    Block scope
 *    Puede ser reasignada
 *    NO puede ser redeclarada
 *    NO puede ser hoisted
 */

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

/**
 * Uso de CONST
 *    NO tiene alcance global
 *    Tiene alcance de function
 *    Tiene alcance de bloque
 *    NO puede ser reasignada
 *    NO puede ser redeclarada
 *    NO puede ser hoisted
 */

const animal = 'Dog';
animal = 'Cat';
console.log(animal); // TypeError: Assignment to constant variable.

const fruits = () => {
  if(true){
    var fruit1 = 'Apple'; // Function scope
    let fruit2 = 'Kiwi';  // Block scope
    const fruit3 = 'Banana' // Block scope
  }

  console.log(fruit1); // Apple
  console.log(fruit2); // fruit2 is not defined
  console.log(fruit3);
};

fruits()